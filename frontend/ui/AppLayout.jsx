import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage: "url('/p1.webp')", // Path to your image
        minHeight: "100vh", // Ensure it covers the entire viewport
        backgroundSize: "cover", // Make sure the image covers the entire container
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Loader and Header */}
      {isLoading && <Loader />}
      <Header />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
