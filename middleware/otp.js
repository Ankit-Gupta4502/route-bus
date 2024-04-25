const express = require("express");
const router = express.Router();
const Otp = require("../models/Otp");
const { Op } = require("sequelize");
const jwt=require("jsonwebtoken");

router.post("/sendotp", async (req, res) => {
    const {user_type, phone } = req.body;
try {
    const existingOTP = await Otp.findOne({
        where: {
            phone,
            createdAt: {
                [Op.gte]: new Date(new Date() - 1 * 60 * 1000),
            },
        },
    });

    if (existingOTP && existingOTP.isVerified) {
        return res.status(409).json({ message: 'Redirected to login.' });
    }

    if (existingOTP && !existingOTP.isVerified) {
        // If an existing OTP is not verified, delete it and proceed to send a new OTP
        await Otp.destroy({
            where: {
                phone,
                isVerified: false,
            },
        });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    await Otp.create({ user_type, phone, otp });

    // Send the OTP via SMS or any other method (implement sendOTP function)
    // sendOTP(phone, otp); // Assuming sendOTP is a function that sends OTP via SMS

    return res.status(200).json({otp, message: 'OTP sent successfully.' });
} catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ message: 'Internal server error.' });
}
});
 


router.post("/verify", async (req, res) => {
    const { phone, otp } = req.body;
console.log(phone,otp)
    try {
        const otpRecord = await Otp.findOne({ where: { phone,otp } });
        console.log(otpRecord)

        if (otpRecord) {
          
            if (isExpired(otpRecord.dataValues.createdAt) && otpRecord.dataValues.isVerified===false ) {
                    await otpRecord.destroy();
                    return res.json({ success: false, message: "OTP expired. Please request a new OTP." });
            } else {
                otpRecord.isVerified = true;
                await otpRecord.save();
                const token = jwt.sign({ phone: otpRecord.phone }, process.env.JWT, { expiresIn: '1h' });
                return res.status(200).json({verifiedUser:otpRecord, token });
                
            }
        } else {
            res.json({ success: false, message: "Invalid OTP." });
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ success: false, error: "Error verifying OTP" });
    }
});

function isExpired(timestamp) {
    const expirationTime = 1* 60 * 1000; 
    const currentTime = new Date().getTime();
    console.log(currentTime,currentTime - new Date(timestamp).getTime() > expirationTime)
    return currentTime - new Date(timestamp).getTime() > expirationTime;
}

module.exports = router;
