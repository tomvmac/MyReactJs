import { USER_LOGGED_IN } from "../types";
import api from "../api";


export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN, 
    user
})

// Takes user credentials and calls api and then use redux and thunk to store data
export const login = (credentials) => (dispatch) => 
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));