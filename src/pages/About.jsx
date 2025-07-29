import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
        <Helmet>
        <title>Job Tracker | About</title>
      </Helmet>
        <motion.div
      className="min-h-screen bg-white py-10 px-6 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Job Tracker
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-6 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <strong>Job Tracker</strong> is an all-in-one platform created to
          simplify and enhance the job-hunting experience for job seekers. We
          know how stressful and unorganized job searching can be — tracking
          applications, preparing for interviews, following up — everything can
          get messy. That's why Job Tracker is here to help.
        </motion.p>
        <motion.section
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎯 Our Mission
          </h2>
          <p className="text-gray-700 text-justify">
            Our mission is to empower job seekers by offering a simple,
            intuitive, and efficient platform where they can manage every aspect
            of their job search. We aim to save your time, reduce stress, and
            increase your chances of landing your dream job.
          </p>
        </motion.section>
        <motion.section
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Track multiple job applications in one place</li>
            <li>
              Mark applications as applied, interviewing, rejected, or offered
            </li>
            <li>Save company details, notes, interview dates</li>
            <li>Integrated user profile and authentication</li>
            <li>Secure data storage with Firebase</li>
            <li>Mobile responsive UI with Tailwind CSS</li>
            <li>Clean, modern and distraction-free interface</li>
          </ul>
        </motion.section>
        <motion.section
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🧠 Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <span>✅ React.js</span>
            <span>✅ React Router</span>
            <span>✅ Firebase Auth</span>
            <span>✅ Firestore Database</span>
            <span>✅ Tailwind CSS</span>
            <span>✅ Framer Motion</span>
            <span>✅ React Helmet</span>
            <span>✅ Vite</span>
          </div>
        </motion.section>
        <motion.section
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📈 Why Use Job Tracker?
          </h2>
          <p className="text-gray-700 text-justify">
            Whether you're a fresher starting your first job hunt or a
            professional looking to switch careers, Job Tracker gives you the
            structure and clarity you need. No more Excel sheets or forgotten
            follow-ups — just a focused path toward your next opportunity.
          </p>
        </motion.section>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 italic">
            💡 “Job hunting doesn't have to be stressful. Stay organized. Stay
            confident.”
          </p>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
