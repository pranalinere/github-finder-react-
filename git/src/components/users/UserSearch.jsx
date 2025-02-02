import { useState,useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'


function UserSearch() {

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    

    const [text, setText] = useState('') // for string 

    const handleChange = (e) => setText(e.target.value) //for setting text

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '')
            {
                alert('Please enter something')
            }
        else 
            {
                searchUsers(text)
                setText('')
            }
    }
  return (
    <div className='grid gird-cols-1 xl:grid-cols-2 lg:gird-cols-2 md:gird-cols-2 mb-8 gap-8'>
        <div>
           <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <div className="relative">

                        <input 
                            type="text" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder='Search'
                            value={text}
                            onChange={handleChange}/>

                        <button type='submit' className='absolute top-0 right-0 right-0 rounded-l-none w-36 btn btn-lg'>
                        Go
                        </button>
                    </div>
                </div>
            </form> 
        </div> 

        {users.length > 0 && 
        ( <div>
            <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
                Clear
            </button>
        </div> )} 
         
      
    </div>
  )
}

export default UserSearch
