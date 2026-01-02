import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

function Logout() {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    authContext.logout();
    navigate("/login");
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-semibold mb-2">
        You are logged out!
      </h1>
      <p className="text-gray-600">
        Thank you for using our App. Come back soon!
      </p>
    </div>
  );
}

export default Logout;
