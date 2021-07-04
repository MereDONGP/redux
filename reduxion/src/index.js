import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const incrementing = (state = 0, action) => {
  switch(action.type){
    case 'increase':
      return state + 1
    
    case 'decrease':
      return state - 1
    
    case 'zero':
      return 0
    
    default:
      return state 
  }
}

const store = createStore(incrementing)

function App() {
  return (
    <div>
    <h1>{store.getState()}</h1>
    <button onClick={() => store.dispatch({type:'increase'})}>increase</button>
    <button onClick={() => store.dispatch({type:'decrease'})}>decrease</button>
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