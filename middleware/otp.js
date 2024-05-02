const express = require("express");
const router = express.Router();
const Otp = require("../models/otp");
const jwt = require("jsonwebtoken");
const Conductor = require("../models/conductor/conductor");
const OwnerDetails = require("../models/owner/OwnerDetails");
const User = require("../models/user/User");

router.post("/sendotp", async (req, res) => {
  const { user_type, phone } = req.body;
  try {
    const existingOTP = await Otp.findOne({ phone, user_type });

    if (existingOTP && existingOTP.isVerified) {
      return res.status(409).json({ message: "Redirected to login." });
    }

    if (existingOTP && !isExpired(existingOTP.createdAt)) {
      return res.status(429).json({ message: "Please wait before requesting a new OTP." });
    }

    if (existingOTP && !existingOTP.isVerified) {
      // If an existing OTP is not verified, delete it and proceed to send a new OTP
      await Otp.deleteOne({ phone, user_type, isVerified: false });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    await Otp.create({ user_type, phone, otp });

    // Send the OTP via SMS or any other method (implement sendOTP function)
    // sendOTP(phone, otp); // Assuming sendOTP is a function that sends OTP via SMS

    return res.status(200).json({ otp, message: "OTP sent successfully." });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/verify", async (req, res) => {
  const { user_type, phone, otp } = req.body;
  try {
    const otpRecord = await Otp.findOne({ phone, user_type, otp });
 
    if (!otpRecord) {
      return res.json({ success: false, message: "Invalid OTP." });
    } 

    if (isExpired(otpRecord.createdAt) && !otpRecord.isVerified) {
      await Otp.deleteOne({ phone, user_type, isVerified: false });
      return res.json({
        success: false,
        message: "OTP expired. Please request a new OTP.",
      });
    }

    otpRecord.isVerified = true;
    const user = await otpRecord.save();


    let existingUser;
    let newUser;

    if (user.user_type === "owner") {
      existingUser = await OwnerDetails.findOne({ phone: user.phone });
      if (!existingUser) {
        newUser = await OwnerDetails.create({ phone: user.phone });
      }
    } else if (user.user_type === "user") {
      existingUser = await User.findOne({ phone: user.phone });
      if (!existingUser) {
        newUser = await User.create({ phone: user.phone });
      }
    } else {
      existingUser = await Conductor.findOne({ phone: user.phone });
      if (!existingUser) {
        newUser = await Conductor.create({ phone: user.phone });
      }
    }
    const userss=existingUser || newUser;
    const token = jwt.sign({ userss }, process.env.JWT, {
      expiresIn: "2d",
    });
    console.log(userss,";oliukyjhtgrfdsfxcghjk")
    return res.status(200).json({ verifiedUser: existingUser || newUser, token });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, error: "Error verifying OTP" });
  }
});

function isExpired(timestamp) {
  const expirationTime = 1 * 60 * 1000;
  const currentTime = new Date().getTime();
  return currentTime - new Date(timestamp).getTime() > expirationTime;
}

module.exports = router;
