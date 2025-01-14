import React from "react";
const Page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-fitViolet">

      {/* Main Login section */}
      <div className="relative w-full max-w-md p-6 space-y-6 bg-white shadow-md rounded-lg z-10">
        <h1 className="text-2xl font-bold text-center text-fitBlue">
          Log in to Your FitSpo Account
        </h1>
        <form className="space-y-4">
          {/* username section */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fitBlue"
              placeholder="Enter your username"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-fitGreen rounded-lg hover:bg-fitRed focus:outline-none focus:ring-2 focus:ring-fitGreen"
          >
            Log in
          </button>
        </form>
        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
  Don’t have an account?{" "}
  <a href="/signup" className="text-fitBlue hover:underline">
    <span className="font-bold">Sign up today!</span>
  </a>
</p>

      </div>
    </div>
  );
};
export default Page;