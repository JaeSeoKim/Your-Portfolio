import gql from 'graphql-tag'

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
    tag: [String]
  }
  type Query {
    profile: User!
    user(username: String!): User!
    users: [User]!
  }
  input UpdateProfileInput {
    displayName: String
    profileUrl: String
    avatarUrl: String
    email: String
    blog: String
    bio: String
    tag: [String]
  }
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User!
  }
`
