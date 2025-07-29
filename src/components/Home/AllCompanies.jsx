import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';

const AllCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data =>{
          setCompanies(data);
          setLoading(false);
        })
    }, [])
    if(loading){
      return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )}
    // console.log(companies);
    return (
        <div className='bg-gray-100 px-10 pb-15 pt-7'>
            <div className="max-w-5xl mx-auto text-center">
            <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        Companies
        </motion.h2>
        </div>
        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  transition={{ staggerChildren: 0.1 }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  {
    companies.map(company => (
      <motion.div
        key={company.id}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
      >
        <CompanyCard company={company} />
      </motion.div>
    ))
  }
</motion.div>
    </div>
    );
};

export default AllCompanies;