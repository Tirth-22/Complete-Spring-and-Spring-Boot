import { Link, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

const Header = () => {
  const { username } = useParams();
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">
        <p className="font-semibold">Todo App</p>

        {/* Home visible only when logged in */}
        {isAuthenticated && (
          <Link
            to={`/welcome/${username}`}
            className="font-bold hover:underline"
          >
            Home
          </Link>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {!isAuthenticated && (
          <Link to="/login" className="font-bold hover:underline">
            Login
          </Link>
        )}

        {isAuthenticated && (
          <Link to="/logout" className="font-bold hover:underline">
            Logout
          </Link>
        )}

        {isAuthenticated && username && (
          <span className="text-sm">
            Welcome, <b>{username}</b>
          </span>
        )}
      </div>

    </header>
  );
};

export default Header;
