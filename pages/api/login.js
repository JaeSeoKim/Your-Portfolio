import passport from 'passport'
import nextConnect from 'next-connect'
import { setLoginSession } from '../../lib/auth/iron'
import { strategy } from '../../lib/auth/passport-github'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(strategy)

export default nextConnect()
  .use(passport.initialize())
  .get(async (req, res) => {
    try {
      const user = await authenticate('github', req, res)
      // session is the payload to save in the token, it may contain basic info about the user
      const session = user
      // The token is a string with the encrypted session
      await setLoginSession(res, session)
      res.writeHead(302, { Location: '/' })
      res.end()
    } catch (error) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })
