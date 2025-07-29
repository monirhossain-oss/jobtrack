import {motion} from 'framer-motion';
import hero from "../../assets/hero.jpg";
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    return (
        <div className="bg-gray-100 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Track Your Job Applications <br /> Easily and Effectively
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            JobTracker helps you stay organized in your career journey. Manage your job applications, statuses, and deadlines all in one place.
          </p>
          <button className="bg-[#8D8DE6] text-black hover:scale-[101%] transition-all px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={hero} alt="Hero Image" className="w-full max-w-md" />
        </motion.div>
      </div>
    </div>
    );
};

export default Hero;