/* Apollo Server */
const { ApolloServer } = require('apollo-server')

/* Query/Mutation Type */
const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')

/* Enum Types */
const enums = require('./typedefs-resolvers/_enums')

/* Object/Input Types + Resolvers */
const teams = require('./typedefs-resolvers/teams')
const people = require('./typedefs-resolvers/people')
const roles = require('./typedefs-resolvers/roles')
const equipments = require('./typedefs-resolvers/equipments')
const softwares = require('./typedefs-resolvers/softwares')
const supplies = require('./typedefs-resolvers/supplies')

/* Interface Type + Resolvers */
const tools = require('./typedefs-resolvers/tools')

/* Union Type + Resolvers */
const givens = require('./typedefs-resolvers/givens')

/* DocumentNode or Array<DocumentNode> */
const typeDefs = [
    queries,
    mutations,
    enums,
    teams.typeDefs,
    people.typeDefs,
    roles.typeDefs,
    equipments.typeDefs,
    softwares.typeDefs,
    supplies.typeDefs,
    tools.typeDefs,
    givens.typeDefs
]

/* Object or Array<Object> */
const resolvers = [
    teams.resolvers,
    people.resolvers,
    roles.resolvers,
    equipments.resolvers,
    softwares.resolvers,
    supplies.resolvers,
    tools.resolvers,
    givens.resolvers
]

/* Create Apollo Server */
const server = new ApolloServer({ typeDefs, resolvers })

/* Open Apollo Server */
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
