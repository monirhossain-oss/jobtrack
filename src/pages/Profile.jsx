import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../ContextProviders/ContextProviders';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
         
    <div className="bg-gray-100 py-7 md:py-10 lg:py-20 px-4">
      <Helmet>
                      <title>Job Tracker | Profile</title>
                  </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 text-center"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={user?.photoURL}
          alt={user?.displayName}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
        />

        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>

        <div className="mt-6 text-left space-y-2">
          <p className="text-sm text-gray-500">
            <strong>UID:</strong> {user?.uid}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Email Verified:</strong> {user?.emailVerified ? "Yes" : "No"}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Account Created:</strong>{" "}
            {new Date(user?.metadata?.creationTime).toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Last Sign-In:</strong>{" "}
            {new Date(user?.metadata?.lastSignInTime).toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Phone Number:</strong>{" "}
            {
                user?.phoneNumber || "Not provide"
            }
          </p>
        </div>
      </motion.div>
    </div>
    );
};

export default Profile;