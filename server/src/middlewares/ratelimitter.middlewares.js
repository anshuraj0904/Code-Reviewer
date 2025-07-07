import redis from "../config/redis.js";
import dotenv from "dotenv";

dotenv.config();

const WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW) || 300; // in seconds
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5;

const review_limitter =  async (req, res, next) => {
  const ip = req.ip;

  try {
    const key = `rate_limiter:${ip}`;
    const count = await redis.incr(key);

    // If it's the first request, set expiration
    if (count === 1) {
      await redis.expire(key, WINDOW);
      console.log(`Rate limit window started for IP: ${ip}`);
    }

    if (count > MAX_REQUESTS) {
      return res.status(429).json("Too many requests. Please wait before trying again!.");
    }

    next();
  } catch (err) {
    console.error("Rate limiter error:", err);
    res.status(500).json({ error: "Rate limiter failed" });
  }
};

export default review_limitter;
