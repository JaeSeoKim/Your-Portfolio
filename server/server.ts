import express from "express"
import next from "next"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import session from "express-session"
import MongoStore from "connect-mongo"
import flash from "express-flash"
import passport from "passport"
import apiRoutes from "./routes/apiRoutes"
import authRoutes from "./routes/authRoutes"
import "./db"
import "./models/User"
import "./passport"

const dev = process.env.NODE_ENV !== "production"
if (dev) require("dotenv").config()

const port = parseInt(String(process.env.PORT), 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const CokieStore = MongoStore(session)

let isDisableKeepAlive = false

app.prepare().then(() => {
  const server = express()

  server.use((_, res, next) => {
    if (isDisableKeepAlive) {
      res.set("Connection", "close")
    }
    next()
  })

  // middleware
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(cookieParser())

  server.use(
    session({
      // @ts-ignore
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new CokieStore({ mongooseConnection: mongoose.connection }),
    })
  )

  server.use(flash())
  server.use(passport.initialize())
  server.use(passport.session())

  server.use("/auth", authRoutes)

  server.use("/api", apiRoutes)

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  const appServer = server.listen(port, (err) => {
    if (err) throw err
    console.log(`> ✨Ready on http://localhost:${port}`)
  })

  process.on("SIGINT", () => {
    isDisableKeepAlive = true
    appServer.close((err) => {
      console.log("> 😢 Server closed")
      process.exit(err ? 1 : 0)
    })
  })
})
