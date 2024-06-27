import React, {  useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserDisplay from './UserDisplay'
import GithubContext from '../../context/github/GithubContext'


function UserResults() {

    const {users,loading} = useContext(GithubContext)

   

if(!loading) {
    return (

    //classname: diff cols sizes for diff screens
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>(
           <UserDisplay key={user.id} user = {user} />
        ))}
    </div>
  )
}
else {
    return(
        <Spinner />
    )
}



}

export default UserResults
