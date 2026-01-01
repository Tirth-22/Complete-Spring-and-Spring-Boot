import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Welcome = () => {
 const {username} = useParams()

  return (
    <div>
    <div className='h-screen items-center flex flex-col justify-center'>
      <h1 className='font-bold text-4xl'>Welcome {username}</h1>
      <p><Link className="text-blue-500 underline" to={"/todo"}>Manage</Link> your todos here</p>    
    </div>
    </div>
  )
}

export default Welcome