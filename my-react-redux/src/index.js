import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import redux store
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
// import redux provider to get access to store
import { Provider } from 'react-redux';

// redux reducers
import productsReducer from './reducers/products-reducers';
import userReducer from './reducers/user-reducer';


 // combine reducers
 const allReducers = combineReducers({
     products: productsReducer,
     user: userReducer
 })

 const allStoreEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

// optional initial state data
const initStoreState = {
    products: [{name: 'iPhone'}],
    user: 'Tom'
}

// create redux store
const store = createStore(allReducers, initStoreState, allStoreEnhancers);

// get current State from store
//console.log(store.getState());

// wrap App element into redux Provider so the entire App can access the store
ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));
registerServiceWorker();
