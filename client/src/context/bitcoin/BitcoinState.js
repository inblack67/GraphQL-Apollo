import React, { useReducer } from 'react'
import BitcoinContext from './bitcoinContext'
import BitcoinReducer from './bitcoinReducer'

const BitcoinState = (props) => {

    const initalState = {
        loading: true
    }

    const [state, dispatch] = useReducer(BitcoinReducer, initalState);

    return (
        <BitcoinContext.Provider value={{
            loading: state.loading
        }}>
            { props.children }
        </BitcoinContext.Provider>
    )
}

export default BitcoinState
