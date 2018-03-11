import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import redux store
import { combineReducers, createStore } from 'redux';

// redux reducers
function productReducer(state = [], action) {
   return state;
}

function userReducer(state = '', action) {
    return state;
 }

 // combine reducers
 const allReducers = combineReducers({
     products: productReducer,
     user: userReducer
 })

// create redux store
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// get current State from store
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
