import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-white" : "text-purple-100 hover:text-white";
  };

  return (
    <nav className="bg-purple-600 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center text-purple-900 font-bold text-lg shadow-lg">
            C
          </div>
          <span className="text-2xl font-bold">CourseCompass</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`${isActive("/")} transition font-medium`}
          >
            Dashboard
          </Link>
          <Link 
            to="/chat" 
            className={`${isActive("/chat")} transition font-medium`}
          >
            Chat
          </Link>
          <Link 
            to="/courses" 
            className={`${isActive("/courses")} transition font-medium`}
          >
            Courses
          </Link>
          <Link 
            to="/my-courses" 
            className={`${isActive("/my-courses")} transition font-medium`}
          >
            My Courses
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/profile" 
            className="bg-teal-400 text-purple-900 px-4 py-2 rounded-lg font-medium hover:bg-teal-300 transition shadow-md"
          >
            Profile
          </Link>
          <button 
            onClick={handleLogout}
            className="text-purple-100 hover:text-white transition font-medium hidden md:block"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;