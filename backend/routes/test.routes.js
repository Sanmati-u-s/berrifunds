const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You have access to a protected route",
    userId: req.user.id,
  });
});

module.exports = router;
