import { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Lock, Loader } from "lucide-react";
import axios from "axios";
import Input from "../ui/Input.jsx"; // Custom Input component
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset previous errors
    try {
      const response = await axios.post("http://your-api-url/login", {
        email,
        password,
      });

      if (response.data.success) {
        toast.success("Logged in successfully");

        // Store the token in localStorage
        localStorage.setItem("authToken", response.data.token);

        // Navigate to the home page
        navigate("/");
      } else {
        throw new Error(response.data.message || "Login failed");
      }
    } catch (error) {
      setError(error.message || "Login failed");
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/p1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      {/* Main content */}
      <div className="relative z-10 max-w-md w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-400 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="text-green-500 w-6 h-6" />
            </div>
            <Input
              type="email"
              value={email}
              placeholder="  Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Lock className="text-green-500 w-6 h-6" />
            </div>
            <Input
              type="password"
              value={password}
              placeholder="  Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="font-semibold text-red-500 mb-2">{error}</p>}
          <div className="flex items-center mb-6">
            <p className="text-sm text-gray-400">Don&apos;t have an account?</p>
            <Link
              to="/register"
              className="text-green-400 hover:underline ml-2 text-sm"
            >
              Signup
            </Link>
          </div>
          <button
            className="text-white bg-gradient-to-r from-green-500 to-emerald-600 w-full p-3 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:ring focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
