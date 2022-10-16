import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 60 * 5000,
  max: 5,
  message: {
    message: "to many login attemps, please try again after 5 minutes",
  },
  handler: (req, res, next, options) => {
    res.status(400).send(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default {loginLimiter};
