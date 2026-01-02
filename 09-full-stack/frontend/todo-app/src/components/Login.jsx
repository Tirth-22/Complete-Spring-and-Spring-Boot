import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";
import { executeBasicAuthService } from "./api/HelloWorldSerice";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("tirth");
  const [password, setPassword] = useState("");
  const [showErrorMessg, setShowErrorMessg] = useState(false);
  const [showSuccessMessg, setShowSuccessMessg] = useState(false);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthService(baToken);

      if (response.status === 200) {
        login(username, baToken);   // ✅ CORRECT
        setShowErrorMessg(false);
        setShowSuccessMessg(true);
        navigate(`/welcome/${username}`);
      }
    } catch (error) {
      setShowErrorMessg(true);
      setShowSuccessMessg(false);
    }
  }

  return (
    <div className="w-1/4 mx-auto my-20">
      {showSuccessMessg && <div className="text-green-600">Successfully logged in</div>}
      {showErrorMessg && <div className="text-red-600">Failed to login</div>}

      <div className="my-3 mx-4">
        <input
          className="border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsername}
        />

        <input
          className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <div className="mt-2 text-center">
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
