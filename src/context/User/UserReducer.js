import {GET_PROFILE,GET_USERS} from '../Types'

export default (state, action) =>{
    const {payload, type} = action;

    switch(type) {
        case GET_USERS:
            return{
                ...state,
                user:payload
            }
        case GET_PROFILE:
            return{
                ...state,
                selectedUser:payload
            }
            default:
                return state;
    }
}