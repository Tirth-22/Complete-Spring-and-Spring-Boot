import '../App.css'
import ErrorPage from './ErrorPage'
import Login from './Login'
import Welcome from './Welcome'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {

    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route index element={<Welcome />} />
                <Route path='/welcome/:username' element={<Welcome />} />
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </div>
    )
}

export default HomePage