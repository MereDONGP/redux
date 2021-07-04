import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const incrementing = (state = 0, action) => {
  switch(action.type){
    
  }
}

function App() {
  
  return (
    <h1>Hello world</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
