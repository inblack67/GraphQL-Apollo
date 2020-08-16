import React from 'react'
import PropTypes from 'prop-types'

const LaunchItem = ({ launch: { rocket: { rocket_name } } }) => {
    return (
        <div>
            <li>
                { rocket_name }
            </li>
        </div>
    )
}

LaunchItem.propTypes = {
    launch: PropTypes.object.isRequired,
}

export default LaunchItem
