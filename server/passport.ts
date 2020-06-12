import passport from "passport"
import GitHubStrategy from "passport-github"
import User from "./models/User"

const dev = process.env.NODE_ENV !== "production"
if (dev) require("dotenv").config()

passport.use(
  new GitHubStrategy(
    {
      // @ts-ignore
      clientID: process.env.GITHUB_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/github/callback`,
    },
    async (
      _accessToken: any,
      _refreshToken: any,
      profile: {
        _json: {
          login: any
          avatarUrl: any
          id: any
          name: any
          blog: any
          email: any
          bio: any
        }
      },
      cb: (
        arg0: null | Error,
        arg1: import("mongoose").Document | undefined
      ) => any
    ) => {
      const {
        _json: { login: id, avatarUrl, id: githubId, name, blog, email, bio },
      } = profile
      try {
        const isExistUser = await User.findOne({ id: id.toLowerCase() })
        if (isExistUser) {
          return cb(null, isExistUser)
        }
        const newUser = await User.create({
          id: id.toLowerCase(),
          name,
          githubId,
          avatarUrl,
          email,
          blog,
          bio,
        })
        return cb(null, newUser)
      } catch (error) {
        console.log(error)
        return cb(null, undefined)
      }
    }
  )
)

// passport.serializeUser<any, any>((user, done) => {
//   done(undefined, user.id)
// })

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user)
//   })
// })

// @ts-ignore
passport.serializeUser(User.serializeUser())
// @ts-ignore
passport.deserializeUser(User.deserializeUser())
