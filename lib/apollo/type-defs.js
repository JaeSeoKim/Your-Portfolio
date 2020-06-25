import gql from 'graphql-tag'

export const typeDefs = gql`
  type TimeLine {
    color: String!
    icon: String!
    title: String!
    subtitle: String
    value: String!
  }
  type TimeLineFeild {
    title: String!
    timeLine: [TimeLine]
  }
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
    timeLineFeilds: [TimeLineFeild]
  }
  input InputTimeLine {
    color: String!
    icon: String!
    title: String!
    subtitle: String
    value: String!
  }
  input InputTimeLineFeild {
    title: String!
    timeLine: [InputTimeLine]
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
    timeLineFeilds: [InputTimeLineFeild]
  }
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User!
  }
`
