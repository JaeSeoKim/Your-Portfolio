import mongoose from "mongoose"

const dev = process.env.NODE_ENV !== "production"
if (dev) require("dotenv").config()

const MONGO_URI = process.env.MONGO_URL || ""
const connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("> ✨ Successfully connected to mongodb")
    })
    .catch((e) => {
      console.error(e)
    })
  mongoose.Promise = global.Promise // Node 의 네이티브 Promise 사용
}
connect()
mongoose.connection.on("disconnected", connect) // 연결 해제시 재 연결
