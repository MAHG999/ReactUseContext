import React, { useReducer } from 'react'

import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axios from 'axios'

const UserState = (props) => {
    const initialState = {
        user:[],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer,initialState)
    
    const getUsers = async () => {
        const respuesta = await axios.get("https://reqres.in/api/users")
        dispatch({
            type: 'GET_USERS',
            payload: respuesta.data.data
        })
    }
    
    const getProfile = async (id) =>{
        const respuesta = await axios.get("https://reqres.in/api/users/" + id)
        dispatch({
            type: 'GET_PROFILE',
            payload: respuesta.data.data
            
        })
    }

    return(
        <UserContext.Provider value={
           {
                user: state.user,
                selectedUser: state.selectedUser,
                getUsers,
                getProfile
           } 
        }>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
