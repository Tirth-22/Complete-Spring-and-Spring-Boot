import '../App.css'
import ErrorPage from './ErrorPage'
import Login from './Login'
import Welcome from './Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomePage = () => {

    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='' element={<Welcome />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </div>
    )
}

export default HomePage