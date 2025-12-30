import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    
    const [name, setname] = useState('tirth')
    const [password, setpassword] = useState('')
    const [showErrorMessg, setShowErrorMessg] = useState(false)
    const [showSuccessMessg, setshowSuccessMessg] = useState(false)
    const navigate = useNavigate()

    function handleUsername(e) {
        setname(e.target.value)
    }                                                

    function handlePassword(e) {
        setpassword(e.target.value)
    }

    function showMessg(){
        if(password==="dummy" && name==="tirth"){
            setShowErrorMessg(false)
            setshowSuccessMessg(true)
            navigate(`/welcome/${name}`)
        }else{
            setShowErrorMessg(true)
            setshowSuccessMessg(false)
        }
    }

    function SuccessMessg(){
        if(showSuccessMessg){
            return <div>
                Successfully login...
            </div>
        }
        return null
    }

    function ErrorMessg(){
        if(showErrorMessg){
            return <div>
                Failed to login...
            </div>
        }
        return null
    }

    return (
        <div className='w-1/4 mx-auto my-20'>
            <SuccessMessg />
            <ErrorMessg />
            <div className='my-3 mx-4 '>
                <input className="border border-gray-300 rounded px-4 py-2 w-full" type="text" placeholder="Enter your username" value={name} onChange={handleUsername} />
                <input className="border border-gray-300 rounded px-4 py-2 w-full mt-2" type="password" placeholder="Enter your password" value={password} onChange={handlePassword} />
            </div>
            <div className="mt-2 ml-18">
                <button onClick={showMessg} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">login</button>
            </div>
        </div>
    )
}

export default Login
