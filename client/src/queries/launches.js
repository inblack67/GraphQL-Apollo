import gql from 'graphql-tag'

export const FETCH_LAUNCHES = gql`{
    launches{
        flight_number,
        mission_name,
        launch_data_local,
        launch_success
        rocket{
            rocket_name
        }
    }
}`;