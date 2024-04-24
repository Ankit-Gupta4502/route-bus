
const randomstring = require("randomstring");
const Otp = require("../models/otp");
const express = require("express");
const router = express.Router();



router.post("/generate", async (req, res) => {
    const { user_type, phone } = req.body;
    const otp = randomstring.generate({ length: 4, charset: "numeric" });

    try {
        const otpv=await Otp.create({ user_type, phone, otp });
        res.json({ success: true, otp });
    } catch (error) {
        console.error("Error generating OTP:", error);
        res.status(500).json({ success: false, error: "Error generating OTP" });
    }
});

router.post("/verify", async (req, res) => {
    const { phone, enteredOTP } = req.body;

    try {
        const isVerified = await verifyOTP(phone, enteredOTP);
        res.json({ success: true, isVerified });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ success: false, error: "Error verifying OTP" });
    }
});

module.exports = router;



  