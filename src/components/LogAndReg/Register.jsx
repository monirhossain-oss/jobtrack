import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../ContextProviders/ContextProviders";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();
  // console.log(createUser)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photo-url");
    const password = form.get("password");
    const expression = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!expression.test(password)) {
      return toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
    createUser(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        naviGate(location !== null ? location?.state?.from : "/");
        toast.success("Registered Successfully!", {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200 px-4 ">
      <div className="w-full max-w-md bg-gray-400 shadow-2xl rounded-2xl p-8 my-7 sm:my-10">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create your account
        </h2>
        <form onSubmit={handleRegister} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
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
              Photo URL
            </label>
            <input
              type="text"
              name="photo-url"
              placeholder="https://example.com/your-photo.jpg"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition duration-300 cursor-pointer"
          >
            Register
          </button>

          <p className="text-center text-sm mt-2 text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
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

export default Register;
