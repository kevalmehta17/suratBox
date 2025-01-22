export function ContactUs() {
  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/p1.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content Box */}
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-opacity-80 rounded-lg shadow-lg p-8 sm:p-12 text-center relative z-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-green-400 mb-6">
          Surat Box Cricket
        </h1>

        {/* Contact Details */}
        <p className="text-lg text-white mb-4 ">
          <strong>Powered by :-</strong>
          <span className="text-xl px-2">Harsh, Keval, Utsav</span>
        </p>

        <p className="text-lg text-white">
          <strong>Contact No :-</strong>
          <span className="text-xl py-5"> +91 7016802239</span>
        </p>

        <p className="text-lg text-white py-4">
          <strong>Location :-</strong>
          <span className="text-xl"> Surat</span>
        </p>
      </div>
    </div>
  );
}
