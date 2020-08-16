const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_data_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
})

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        launches: {
            type: new GraphQLList(LaunchType),
            resolve: async (parent, args) => {
                const res = await axios(`https://api.spacexdata.com/v3/launches`);
                return res.data;
            }
        },
        launch: {
            
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQueryType
})