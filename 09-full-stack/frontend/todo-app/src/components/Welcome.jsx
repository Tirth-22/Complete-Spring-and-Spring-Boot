import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { retriveHelloWorldBean, retriveHelloWorldPathvariable } from './api/HelloWorldSerice'
import { useAuth } from './security/AuthProvider'

const Welcome = () => {
  const authContext = useAuth()

  const { username } = useParams()

  const [message, setmessage] = useState(null)

  function callHelloWorldApi(){

    retriveHelloWorldPathvariable("tirth",authContext.token)
      .then((response) => { SuccessfulResponse(response) })
      .catch((error) => { ErrorResponse(error) })
      .finally( () => {console.log("cleanup");
      })
  }

  function SuccessfulResponse(response) {
    console.log(response.data.message);
    setmessage(response.data.message)
  }

  function ErrorResponse(error) {
    console.log(error);
  }
  
  return (
    <div>
      <div className='h-screen items-center flex flex-col justify-center'>
        <h1 className='font-bold text-4xl'>Welcome {username}</h1>
        <p><Link className="text-blue-500 underline" to={"/todo"}>Manage</Link> your todos here</p>
        <button onClick={callHelloWorldApi} className='cursor-pointer rounded-full py-2 px-4 bg-green-600 text-white my-6'>Call Hello api
        </button>
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}

export default Welcome