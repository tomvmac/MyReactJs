import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
    const { credentials } = req.body;
    if (credentials.password == "test") {
        res.status(200).json({ authentication: { global: "Good credentials" } });
    } else {
        res.status(400).json({ errors: { global: "Invalid credentials" } });
    }

});

export default router;