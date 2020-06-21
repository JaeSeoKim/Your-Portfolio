import {
  AuthenticationError,
  UserInputError,
  ApolloError
} from 'apollo-server-micro'
import { getLoginSession } from '../auth/iron'
import dbConnect from '../utils/dbConnect'
import User from '../models/User'

export const resolvers = {
  Query: {
    async user(_parent, args, _context, _info) {
      try {
        await dbConnect()
        if (args.username) {
          const user = await User.findOne({ username: args.username })
          return user
        }
        throw new UserInputError('Invalid args combination')
      } catch (error) {
        console.log(error)
        throw new ApolloError('Invalid Error')
      }
    },
    async users(_parent, _args, _context, _info) {
      try {
        await dbConnect()
        const totalCount = await User.countDocuments()
        let users = new Array(6)
        for (let i = 0; i < users.length; i++) {
          const skipsize = Math.floor(Math.random() * totalCount)
          users[i] = await User.findOne().skip(skipsize)
        }
        return users
      } catch (error) {
        console.log(error)
        throw new ApolloError('Invalid Error')
      }
    },
    async profile(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)
        if (session) {
          await dbConnect()
          const result = await User.findOne({ id: session.id })
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
  },
  Mutation: {
    async updateProfile(_parent, args, context, _info) {
      try {
        const session = await getLoginSession(context.req)
        if (session) {
          try {
            await dbConnect()
            const { ok } = await User.updateOne({
              ...args.input,
              id: session.id
            })
            if (ok === 1) {
              const result = await User.findOne({ id: session.id })
              if (!result) {
                // TODO: 비정상적인 토큰시 접근 로그 작성
                console.error(
                  "[SECURITY] > User Can't Found But Token is verified (Maybe: Token Key exposure)"
                )
                throw Error()
              }
              return result
            }
            throw new UserInputError('Invalid args combination')
          } catch (error) {
            throw new ApolloError('Invalid Error')
          }
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
}

// export const resolvers = {
//   Query: {
//     viewer(_parent, _args, _context, _info) {
//       return { id: 1, name: 'John Smith', status: 'cached' }
//     },
//   },
// }
