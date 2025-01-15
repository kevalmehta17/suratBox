export function Home() {
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/cricket-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to <span className="text-green-400">Box Cricket</span>
        </h1>
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-xl shadow-2xl p-8">
          <p className="text-lg text-white mb-6 leading-relaxed">
            <span className="text-green-400">
              Experience cricket like never before
            </span>{" "}
            in our state-of-the-art box cricket facilities. Whether{" "}
            <span className="text-green-400">
              you&apos;re a professional or a hobbyist
            </span>
            , we have something for everyone!
          </p>
          <div className="bg-gradient-to-r from-gray-800 via-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">
              Why Choose Us?
            </h2>
            <ul className="text-left list-disc list-inside space-y-3 text-white font-semibold">
              <li>
                <span>Professional-grade facilities</span>
              </li>
              <li>
                <span>Multiple box sizes to suit your needs</span>
              </li>
              <li>
                <span>Affordable pricing for everyone</span>
              </li>
              <li>
                <span>24/7 availability for unmatched convenience</span>
              </li>
              <li>
                <span>Professional coaching for all skill levels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
