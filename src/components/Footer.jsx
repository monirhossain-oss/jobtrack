import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-6 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">JobTracker</h2>
                <p className="text-sm text-gray-400">
                  Track your job applications easily and stay organized in your career journey.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><Link to={'/'} className="hover:text-white">Home</Link></li>
                  <li><Link to={'/companies'} className="hover:text-white">Companeis</Link></li>
                  <li><Link to={'/profile'} className="hover:text-white">Profile</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400">Facebook</a>
                  <a href="#" className="hover:text-blue-300">Twitter</a>
                  <a href="#" className="hover:text-pink-400">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} JobTracker. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;