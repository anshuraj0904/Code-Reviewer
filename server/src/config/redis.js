import Redis from "ioredis"
import dotenv from "dotenv";
dotenv.config();



const host = process.env.REDIS_HOST
const port = process.env.REDIS_PORT
const password = process.env.REDIS_PASSWORD


const redis = new Redis({
    host:host,
    port:port,
    password:password

})


redis.on("connect",()=>{
    console.log('Connected to redis on port:',port);
    
})

redis.on("error", (err) => {
  console.error("❌ Redis connection error:", err);
});

export default redis;