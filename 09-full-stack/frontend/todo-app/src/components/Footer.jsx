import { useContext } from "react";
import { AuthContext, useAuth } from "./security/AuthProvider";

const Footer = () => {

  // const authContext = useContext(AuthContext)
  const authContext = useAuth() 

  // console.log(`footer is - ${authContext.number}`);
  console.log(authContext);
  

  return (
    <footer className="bg-slate-900 text-white text-center relative py-3 bottom-0 w-full">
      © 2025 Todo App
    </footer>
  );
};

export default Footer;
