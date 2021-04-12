import React, {useEffect , useContext} from 'react'
import UserContext from '../context/User/UserContext'

const UserList = () => {
    const {user, getUsers, getProfile} =  useContext(UserContext)
    

    useEffect(() =>{
        getUsers();
        
    },[])

    return(
        <div className="list-group h-100">
            {
                user.map(user =>(
                    <a className="list-group-item list-group-item-action d-flex felx-row justify-content-start" href="#!" key={user.id} onClick={() => getProfile(user.id)}> 
                    <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" />
                {
                    `${
                        user.first_name
                    }
                    ${
                        user.last_name
                      }
                `}
                
                    </a>
                ))
            }
        </div>
    )
}
export default UserList