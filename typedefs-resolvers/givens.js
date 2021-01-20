const { gql } = require('apollo-server')

const typeDefs = gql`
    union Given = Equipment | Supply
`

const resolvers = {
    Given: {
        /* Logic to determine the type of the object */
        __resolveType(obj, context, info) {
            if (obj.used_by) return 'Equipment'
            else if (obj.team) return 'Supply'
            else return null
        }
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}
