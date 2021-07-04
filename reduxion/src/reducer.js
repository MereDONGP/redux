import React from 'react'

const initial = {
    good:0,
    ok:0,
    bad:0,
}

const Reducer = (state = initial, action) => {
    switch(action.type){
        case 'good':
            return state = {...state, "good": state.good + 1}
        
        case 'bad':
            return state = {...state, "bad": state.bad + 1}
        
        case 'ok':
            return state = {...state, "ok": state.ok + 1}
        
        case 'zero':
            return state = {'good': 0, 'ok': 0, 'bad': 0}
        
        default:
            return state 
    }
}

export default Reducer