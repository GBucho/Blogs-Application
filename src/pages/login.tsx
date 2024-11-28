import { useMutation } from "@tanstack/react-query";
import { Input } from "../components/ui/input";
import React, { useState } from "react";
import { login, register } from "../supabase/auth";
import { useNavigate } from "react-router-dom";

const AuthComponent: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleSubmitLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isEmailFilled = !!loginPayload.email;
    const isPasswordFilled = !!loginPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleLogin(loginPayload);
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleRegister(registerPayload);
    }
  };
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
                value={loginPayload.email}
                onChange={(e) => {
                  setLoginPayload({
                    email: e.target.value,
                    password: loginPayload.password,
                  });
                }}
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
                value={loginPayload.password}
                onChange={(e) => {
                  setLoginPayload({
                    email: loginPayload.email,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              onClick={handleSubmitLogin}
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
                value={registerPayload.email}
                onChange={(e) => {
                  setRegisterPayload({
                    email: e.target.value,
                    password: registerPayload.password,
                  });
                }}
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
                value={registerPayload.password}
                onChange={(e) => {
                  setRegisterPayload({
                    email: registerPayload.email,
                    password: e.target.value,
                  });
                }}
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
                value={registerPayload.password}
                onChange={(e) => {
                  setRegisterPayload({
                    email: registerPayload.email,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
            <p className="mt-4 text-sm text-center text-gray-400">
              Already have an account?
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
