import express from "express"

import userRoutes from "./userRoutes"

const router = express.Router()

// routes
router.use("/user", userRoutes)

export default router
