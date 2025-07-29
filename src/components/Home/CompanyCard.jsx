import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const CompanyCard = ({company}) => {
    return (
        <motion.div
  key={company.id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
>
  <Link
    to={`/company-details/${company.id}`}
    className="bg-white shadow hover:shadow-md rounded-lg p-4 flex flex-col items-center justify-center transition-transform duration-200"
  >
    <img
      src={company.logo}
      alt={company.name}
      className="h-20 rounded-xl object-contain mb-4"
    />
    <h3 className="text-center text-lg font-semibold text-gray-700">
      {company.name}
    </h3>
  </Link>
</motion.div>
    );
};

export default CompanyCard;