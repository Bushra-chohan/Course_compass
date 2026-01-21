import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("Attempting login to:", "http://127.0.0.1:8000/api/accounts/login/");
      console.log("With credentials:", { username });

      const response = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          username: username, 
          password: password 
        })
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok && data.access) {
        // Store the JWT token
        localStorage.setItem("token", data.access);
        localStorage.setItem("refresh", data.refresh);
        
        console.log("Login successful! Redirecting...");
        // Redirect to dashboard
        window.location.href = "/";
      } else {
        const errorMsg = data.detail || data.error || "Invalid username or password";
        console.error("Login failed:", errorMsg);
        setError(errorMsg);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Connection failed. Is your Django server running on http://127.0.0.1:8000?");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center text-purple-900 font-bold text-3xl shadow-lg">
            C
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome to CourseCompass
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to manage your courses
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <InputField
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <InputField
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <Button 
            variant="primary" 
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Demo: Use your Django superuser credentials
        </p>
      </div>
    </div>
  );
};

export default Login;