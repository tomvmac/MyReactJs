import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Sample of of simple work flow from  create store -> dispatch action -> reducer, simply replace existing index.js to see it in action

// import redux store
import { createStore } from 'redux';

function reducer(state, action) {
    console.log(action);

    // check action type
    if (action.type === 'changeState'){
        return action.payload.newState;
    }

    return 'State';
}

// create redux store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// get current State from store
console.log(store.getState());

// create redux action
const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
}

// dispatch action
store.dispatch(action);

// get current State from store
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
