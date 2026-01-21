import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses/");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      setError("Failed to load courses. Make sure backend is running.");
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      fetchCourses();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/courses/search/?q=${search}`);
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error("Search failed:", error);
      setError("Search failed");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">📚 Course Catalog</h1>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by course code, title, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearch("");
              fetchCourses();
            }}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      )}

      {/* Courses Grid */}
      {!loading && courses.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.course_code}
              title={course.course_code}
              desc={course.description?.substring(0, 100) + "..." || "No description"}
              credits={course.credits}
              prereq={course.prerequisites?.join(", ") || "None"}
              status={{ 
                label: "Available", 
                bg: "bg-green-100", 
                text: "text-green-700" 
              }}
              colorClass="border-purple-500"
              buttonVariant="primary"
            />
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && courses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No courses found</p>
          <p className="text-gray-500 mt-2">Try a different search term</p>
        </div>
      )}
    </div>
  );
};

export default Courses;