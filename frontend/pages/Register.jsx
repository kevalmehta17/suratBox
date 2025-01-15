import { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Lock, User, Loader } from "lucide-react"; // Added User icon
import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/Input.jsx"; // Custom Input component

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset previous errors
    try {
      // Simulate successful registration
      toast.success("Registered successfully");
      navigate("/login"); // Redirect to login after registration
    } catch (error) {
      setError(error.message || "Registration failed");
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/p1.webp')", // Your image path here
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-md w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-400 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={User}
            type="text"
            value={name}
            placeholder="   Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            value={email}
            placeholder="  Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            value={password}
            placeholder="  Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="font-semibold text-red-500 mb-2">{error}</p>}
          <div className="flex items-center mb-6">
            <p className="text-sm text-gray-400">Already have an account?</p>
            <Link
              to="/login"
              className="text-green-400 hover:underline ml-2 text-sm"
            >
              Login
            </Link>
          </div>
          <button
            className="text-white bg-gradient-to-r from-green-500 to-emerald-600 w-full p-3 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:ring focus:outline-none focus-ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
