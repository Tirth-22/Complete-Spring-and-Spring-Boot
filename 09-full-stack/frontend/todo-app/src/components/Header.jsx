import { Link, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

const Header = () => {
  const { username } = useParams();
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center gap-6">
        <p className="font-semibold">Todo App</p>

        {isAuthenticated && (
          <Link to="/welcome" className="font-bold hover:underline">
            Home
          </Link>
        )}
      </div>

      <div className="flex items-center gap-4">
        {!isAuthenticated && <Link to="/login">Login</Link>}
        {isAuthenticated && <Link to="/logout">Logout</Link>}

        {username && (
          <span className="text-sm">
            Welcome, <b>{username}</b>
          </span>
        )}
      </div>

    </header>
  );
};

export default Header;
