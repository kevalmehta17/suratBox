import { useState } from "react";
import { boxCricketData } from "../data/details";
import { FaPhone, FaClock, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export function Box() {
  const [selectedBox, setSelectedBox] = useState(null);

  const openDetails = (box) => {
    setSelectedBox(box);
  };

  const closeDetails = () => {
    setSelectedBox(null);
  };

  return (
    <div className="relative z-10">
      {/* Background and header */}
      <div
        className="relative z-0 flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/p1.webp')" }} // Replace with your image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-green-400">
            Our Cricket Boxes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxCricketData.map((box) => (
              <div
                key={box.id}
                className="bg-slate-300 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={box.image}
                  alt={box.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openDetails(box)}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{box.name}</h2>
                  <p className="text-gray-600 mb-2">{box.description}</p>
                  <p className="text-blue-600 font-bold">
                    ₹{box.price} per hour
                  </p>
                  <button
                    onClick={() => openDetails(box)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedBox && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedBox.image}
                alt={selectedBox.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <FaTimes className="text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {selectedBox.name}
              </h2>
              <p className="text-gray-300 mb-4">{selectedBox.description}</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaPhone className="text-blue-600" />
                  <span>{selectedBox.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaClock className="text-blue-600" />
                  <span>{selectedBox.timing}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{selectedBox.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Features:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {selectedBox.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-2xl font-bold text-blue-600">
                  ₹{selectedBox.price} per hour
                </p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Box;
