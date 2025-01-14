import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const location = useLocation();

  // Check if the current route is the root ("/")
  const isRootRoute = location.pathname === "/";

  return (
    <div
      className={`relative z-10 flex flex-col justify-center items-center h-screen ${
        isRootRoute ? "bg-cover bg-center bg-no-repeat" : ""
      }`}
      style={
        isRootRoute
          ? {
              backgroundImage: "url('/p1.webp')", // Path to your image
              minHeight: "100vh", // Ensure it covers the entire viewport
            }
          : {}
      }
    >
      {/* Overlay */}
      {isRootRoute && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      )}

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
