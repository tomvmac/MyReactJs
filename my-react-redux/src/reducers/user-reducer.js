import { UPDATE_USER } from '../actions/user-actions'; 


export default function userReducer(state = '', action) {
    // de-structure action into type and payload 
    const {type, payload} = action;

    switch (type) {
        case UPDATE_USER:
            return payload.user;
        default:
            return state;
    }

 }