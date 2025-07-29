import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="p-10 text-center flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-3xl font-bold">"Oops! Something went wrong."</h1>
      <p>{error.statusText || error.message}</p>
      <h3 className="text-3xl text-red-500 font-semibold">{error?.status}</h3>
      <Link to='/' className="bg-green-400 px-4 py-1">Home</Link>
    </div>
  );
};

export default ErrorPage;
