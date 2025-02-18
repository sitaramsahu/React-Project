import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="h-screen flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
      404 - Page Not Found
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      Oops! The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-slate-800 text-white font-serif text-lg rounded-lg shadow-md hover:bg-slate-700 transition"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
