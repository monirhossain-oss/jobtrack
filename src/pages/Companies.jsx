import { Helmet } from "react-helmet-async";
import AllCompanies from "../components/Home/AllCompanies";

const Companies = () => {
  return (
    <div>
      <Helmet>
        <title>Job Tracker | Companies</title>
      </Helmet>
      <AllCompanies></AllCompanies>
    </div>
  );
};

export default Companies;
