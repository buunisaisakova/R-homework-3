import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addUserAction, changeInputAction,deleteAction,clearUser} from "../../redux/actions";
import User from "../../components/user/User";

function UserPage() {
    const dispatch =useDispatch()

    const {value} = useSelector(state => state.usersReducer)
    const {users} = useSelector(state => state.usersReducer)


    const changeInput = (event)=>{
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = ()=> {
        dispatch(addUserAction(value))
        dispatch(clearUser(value))

    }

    const deleteAll  = ()=>{
        dispatch(deleteAction(users))
    }

    return (
        <div>
            <input
                value={value}
            type="text"
            placeholder="name"
            onChange= {changeInput}
            />
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            {users.map((user,index) => <User key = {index} userName ={user}/>)
            }


        </div>
    );
}

export default UserPage;