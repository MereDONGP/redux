import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const initial = {
  good: 0,
  ok: 0,
  bad: 0
}

const incrementing = (state = initial, action) => {
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

const store = createStore(incrementing)

function App() {
  return (
    <div>
      <div>Good: {store.getState().good}</div>
      <div>Ok: {store.getState().ok}</div>
      <div>Bad: {store.getState().bad}</div>
    <button onClick={() => store.dispatch({type:'good'})}>good</button>
    <button onClick={() => store.dispatch({type:'ok'})}>ok</button>
    <button onClick={() => store.dispatch({type:'bad'})}>bad</button>
    <button onClick={() => store.dispatch({type:'zero'})}>zero</button>
    </div>
  )
}

const renderapp = () => { 
  ReactDOM.render(
    <App />,
  document.getElementById('root')
  )
};

renderapp()
store.subscribe(renderapp)