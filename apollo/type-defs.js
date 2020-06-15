import gql from 'graphql-tag'

// export const typeDefs = gql`
//   type User {
//     id: ID!
//     name: String!
//     status: String!
//   }
//   type Query {
//     viewer: User
//   }
// `

export const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    displayName: String!
    profileUrl: String
    avatarUrl: String
    email: String
    blog: String
    bio: String
  }
  type Query {
    profile: User!
    user(username: String!): User!
  }
  # type Mutation {
  # }
`
