// import React, { useState } from "react";

// const AuthComponent: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 text-white">
//         {isLogin ? (
//           <form>
//             <h1 className="text-2xl font-bold mb-2 text-center">
//               Log in to BitBlogs
//             </h1>
//             <p className="text-sm mb-6 text-center text-gray-400">
//               Enter your credentials to access your account
//             </p>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm text-gray-400 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="john@example.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-sm text-gray-400 mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Log In
//             </button>
//             <p className="mt-4 text-sm text-center text-gray-400">
//               Don’t have an account?{" "}
//               <span
//                 onClick={handleToggle}
//                 className="text-blue-500 hover:underline cursor-pointer"
//               >
//                 Sign up
//               </span>
//             </p>
//           </form>
//         ) : (
//           <form>
//             <h1 className="text-2xl font-bold mb-2 text-center">
//               Sign Up for BitBlogs
//             </h1>
//             <p className="text-sm mb-6 text-center text-gray-400">
//               Create your account to start blogging
//             </p>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm text-gray-400 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="john@example.com"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm text-gray-400 mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm text-gray-400 mb-2"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-900 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Confirm your password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Sign Up
//             </button>
//             <p className="mt-4 text-sm text-center text-gray-400">
//               Already have an account?{" "}
//               <span
//                 onClick={handleToggle}
//                 className="text-blue-500 hover:underline cursor-pointer"
//               >
//                 Log in
//               </span>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthComponent;
import { Input } from "../components/ui/input";
import React, { useState } from "react";

const AuthComponent: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 text-white">
        {isLogin ? (
          <form>
            <h1 className="text-2xl font-bold mb-2 text-center">
              Log in to BitBlogs
            </h1>
            <p className="text-sm mb-6 text-center text-gray-400">
              Enter your credentials to access your account
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-gray-900 text-sm text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-2"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                className="w-full bg-gray-900 text-sm text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log In
            </button>
            <p className="mt-4 text-sm text-center text-gray-400">
              Don’t have an account?{" "}
              <span
                onClick={handleToggle}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </form>
        ) : (
          <form>
            <h1 className="text-2xl font-bold mb-2 text-center">
              Sign Up for BitBlogs
            </h1>
            <p className="text-sm mb-6 text-center text-gray-400">
              Create your account to start blogging
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="w-full bg-gray-900 text-sm text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-2"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                className="w-full bg-gray-900 text-sm text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm text-gray-400 mb-2"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                className="w-full bg-gray-900 text-sm text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            <p className="mt-4 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <span
                onClick={handleToggle}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Log in
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
