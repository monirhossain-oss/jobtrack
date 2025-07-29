import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../ContextProviders/ContextProviders";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
    const {resetPassword} = useContext(AuthContext);
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
    .then(() =>{
        toast.success("Send email inbox or spam folder", {
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
    .catch(error =>{
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
    })
    e.target.reset();
  };
  return (
    <div className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 flex items-center justify-center mx-auto min-h-[60vh]">
      <motion.form
        onSubmit={handleResetPassword}
        className="w-full max-w-md space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full">
          <label className="block mb-1 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
      </motion.form>
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

export default ForgotPassword;
