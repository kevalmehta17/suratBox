import { useState } from "react";
import Input from "../ui/Input";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate the form submission (e.g., API request)
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // Simulate success (you can replace this with your actual API call)
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to the home page after submission
        navigate("/"); // This will take the user to the homepage ("/")
      }, 2000); // Simulating a 2-second delay for submission
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/p1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-green-400 mb-6">
          Contact Us
        </h1>

        {/* Card Container */}
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-lg shadow-lg p-8 sm:p-12">
          <p className="text-lg text-white text-center mb-8">
            Have questions or feedback? Fill out the form below, and we'll get
            back to you shortly!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <Input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <Input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                rows="5"
                className="mt-2 block w-full rounded-lg border-gray-200 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none p-3 bg-gray-800 text-white"
                placeholder="Write your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              className="text-white bg-gradient-to-r from-green-500 to-emerald-600 w-full p-3 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:ring focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
