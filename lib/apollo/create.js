import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.

  const enchancedFetch = (url, init) =>
    fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        Cookie: ctx.req.headers.cookie
      }
    }).then(response => response)

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: `${process.env.BASE_URL}/api/graphql`, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch: ctx ? enchancedFetch : fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}
