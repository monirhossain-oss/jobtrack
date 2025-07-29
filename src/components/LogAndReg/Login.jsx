import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../ContextProviders/ContextProviders";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const naviGate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successfully", {
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 px-4">
      
      <div className="w-full max-w-md bg-gray-500 shadow-2xl rounded-2xl p-8 my-7 sm:my-10">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login to your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-sm mt-2 text-white">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-red-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="text-center my-2 text-gray-400">— or —</div>
        </form>
        <GoogleLogin></GoogleLogin>
      </div>
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

export default Login;
