import { gql } from 'apollo-server';
export default gql`

type Query {
    authenticatedUser: User!
}

type User {
    name: String!
    email: String!
    displayName: String!
    #challenges: [Challenge!]!
    #friends: [User!]!
}

type Challenge {
    name: String!
    startDate: String!
    endDate: String!
    participants: [User!]!
    totalPrizeMoney: Int!
    weeklyWeighIns: [WeeklyWeighIn!]!
}

type WeeklyWeighIn {
    date: String!
    challenge: Challenge!
    weighIns: [WeighIn!]!
}

type WeighIn {
    weeklyWeighIn: WeeklyWeighIn!
    user: User!
    weight: Int!
}
`