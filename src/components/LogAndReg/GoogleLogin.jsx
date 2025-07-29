import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../ContextProviders/ContextProviders";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    // console.log("first");
    googleLogin()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Google Login Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        naviGate(location !== null ? location?.state?.from : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="w-full flex gap-2 items-center justify-center border border-gray-300 rounded-xl py-2 hover:bg-gray-800 transition duration-300 cursor-pointer"
      >
        <FaGoogle></FaGoogle>
        Continue with Google
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default GoogleLogin;
