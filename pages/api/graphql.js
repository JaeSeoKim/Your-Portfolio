import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../lib/apollo/schema'

const apolloServer = new ApolloServer({
  schema,
  context(ctx) {
    return ctx
  }
  // playground: false
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
