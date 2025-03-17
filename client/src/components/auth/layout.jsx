import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-screen">
      {/* Left Section with Image */}
      <div className="hidden lg:flex items-center justify-center w-1/2 px-12">
        <div>
          <img
            src="/background.png" // Replace with the correct path to your image
            alt="Bangla Essence Logo"
            className="w-full h-full object-cover" // Ensures the image fits within the container
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;


