import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { getLoginSession } from '../auth/iron'
import dbConnect from '../utils/dbConnect'
import User from '../models/User'

export const resolvers = {
  Query: {
    async user(_parent, _args, context, _info) {},
    async profile(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)
        if (session) {
          await dbConnect()
          const result = await User.findOne({ id: session.id })
          console.log(result)
          if (!result) {
            // TODO: 비정상적인 토큰시 접근 로그 작성
            console.error(
              "[SECURITY] > User Can't Found But Token is verified (Maybe: Token Key exposure)"
            )
            throw Error()
          }
          return result
        } else {
          throw Error()
        }
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        )
      }
    }
  }
  // Mutation: {
  // }
}

// export const resolvers = {
//   Query: {
//     viewer(_parent, _args, _context, _info) {
//       return { id: 1, name: 'John Smith', status: 'cached' }
//     },
//   },
// }
