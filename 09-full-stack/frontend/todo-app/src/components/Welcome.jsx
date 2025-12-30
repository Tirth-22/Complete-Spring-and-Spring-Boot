import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
 const {username} = useParams()

  return (
    <div className='text-center py-40'>Welcome {username}</div>
  )
}

export default Welcome