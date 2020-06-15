import GitHubStrategy from 'passport-github'
import dbConnect from '../../lib/utils/dbConnect'
import User from '../../models/User'

export const strategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/login`
  },
  async (_accessToken, _refreshToken, profile, cb) => {
    const {
      _json: {
        login: username,
        html_url: profileUrl,
        avatarUrl,
        id,
        name: displayName,
        blog,
        email,
        bio
      }
    } = profile
    try {
      await dbConnect()
      const isExistUser = await User.findOne({ id: id })
      if (isExistUser) {
        return cb(null, isExistUser)
      }
      const newUser = await User.create({
        id,
        username,
        displayName,
        profileUrl,
        avatarUrl,
        email,
        blog,
        bio
      })
      return cb(null, newUser)
    } catch (error) {
      console.log(error)
      return cb(null, undefined)
    }
  }
)
