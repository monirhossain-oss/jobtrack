import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";


const CompanyDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then(res => res.json())
      .then(data => {
        setCompanies(data);
        setLoading(false);
      })
  }, [])
  const company = companies.find(company => company.id == id);
  // console.log(company);
  if (!company) {
    return <p className="text-red-600 text-xl font-medium flex justify-center items-center min-h-[300px]">Company not found</p>
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }
  return (
    <div className="bg-gray-100">
      <div className="px-6 py-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-400 p-6 rounded-lg shadow mb-10"
        >
          <img src={company.logo} alt={company.name} className="h-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-center">{company.name}</h2>
          <p className="text-center text-gray-600">{company.industry} — {company.location}</p>
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="block text-center text-white mt-2 hover:underline">
            Visit Website
          </a>
        </motion.div>

        <h3 className="text-xl font-semibold mb-4">Available Jobs</h3>
        <div className="space-y-4">
          {company.jobs.map(job => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-400 shadow p-5 rounded-md"
            >
              <h4 className="text-lg font-bold">{job.title}</h4>
              <p className="text-gray-500">Type: {job.jobType}</p>
              <p className="text-gray-500">Salary: {job.salary}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
        {selectedJob && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 my-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-200 rounded-lg p-6 w-full max-w-lg shadow-lg relative"
            >
              <button
                className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500"
                onClick={() => setSelectedJob(null)}
              >
                ✖
              </button>
              <img src={selectedJob.bannerImage} alt="" className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
              <p className="text-gray-600 mt-2">{selectedJob.description}</p>
              <h2 className="font-semibold mt-2">Location: <span className="text-gray-700 text-[16px]">{selectedJob.location}</span></h2>
              <h2 className="font-semibold mt-2">Salary: <span className="text-gray-700 text-[16px]">{selectedJob.salary}</span></h2>
              <h4 className="font-semibold mt-2">Requirements:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDetails;