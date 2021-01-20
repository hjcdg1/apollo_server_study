const { gql } = require('apollo-server')

const typeDefs = gql`
    interface Tool {
        id: ID!
        used_by: Role!
    }
`

const resolvers = {
    Tool: {
        /* Logic to determine the type of the object */
        __resolveType(obj, context, info) {
            if (obj.developed_by) return 'Software'
            else if (obj.new_or_used) return 'Equipment'
            else return null
        }
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}
