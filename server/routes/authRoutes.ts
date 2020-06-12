import express from "express"
import passport from "passport"

const router = express.Router()

router.get(
  "/github",
  passport.authenticate("github", {
    successFlash: "Welcome",
    failureFlash: "Can't log in at this time",
  }),
  (_req, res) => res.redirect("/")
)

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (_req, res) => res.redirect("/")
)

router.get("/logout", (req, res) => {
  req.flash("info", "Logged out, see you later")
  req.logout()
  res.redirect("/")
})

export default router
