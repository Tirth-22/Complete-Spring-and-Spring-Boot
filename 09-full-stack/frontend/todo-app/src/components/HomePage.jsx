import '../App.css'
import TodoApp from '../todo/TodoApp'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import Welcome from './Welcome'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Logout from './Logout'
import { useAuth } from './security/AuthProvider'
import { Navigate } from "react-router-dom";
import TodoUpdation from '../todo/TodoUpdation'

function AuthenticateRoute({ children }) {
    const authContext = useAuth();
    if (authContext.isAuthenticated) {
        return children
    }
    return <Navigate to="/login" replace />;
}

const HomePage = () => {

    return (
        <div>
            <Header />

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Login />} />
                
                <Route path='/logout' element={
                    <AuthenticateRoute>
                        <Logout />
                    </AuthenticateRoute>
                } />

                <Route path='/welcome/:username' element={
                    <AuthenticateRoute>
                        <Welcome />
                    </AuthenticateRoute>
                } />
                <Route path='/welcome/' element={
                    <AuthenticateRoute>
                        <Welcome />
                    </AuthenticateRoute>
                } />
                <Route path='/todo/:id' element={
                    <AuthenticateRoute>
                        <TodoUpdation />
                    </AuthenticateRoute>
                } />
                <Route path='*' element={<ErrorPage />} />

                <Route path='/todo' element={
                    <AuthenticateRoute>
                        <TodoApp />
                    </AuthenticateRoute>
                } />
            </Routes>

            <Footer />
        </div>
    )
}

export default HomePage