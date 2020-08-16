import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { FETCH_LAUNCHES } from '../queries/launches'
import LaunchItem from './LaunchItem'
import Preloader from './Preloader'

const Launches = () => {
    return (
        <div className='text-center'>
            <h1>Launches</h1>
            <Query query={FETCH_LAUNCHES}>
                {
                    ({ loading, error, data }) => {
                        if(loading){
                            return <Preloader />
                        }
                        if(error){
                            console.error(error)
                            return;
                        }

                        return <Fragment>
                            { data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />) }
                        </Fragment>
                    }
                }
            </Query>
        </div>
    )
}

export default Launches
