/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import React, { useState } from "react";
import { login, register } from "../supabase/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthComponent: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up forms
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<FormValues>();

  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm<FormValues>();

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

  const onSubmitLogin = (data: any) => {
    handleLogin(data);
  };

  const onSubmitRegister = (data: any) => {
    handleRegister(data);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 text-white">
        {isLogin ? (
          <form onSubmit={handleLoginSubmit(onSubmitLogin)}>
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
                {...loginRegister("email", {
                  required: t("email-required", {
                    defaultValue: "email-required",
                  }),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("email-pattern-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                })}
              />
              {loginErrors.email && (
                <p className="text-red-500 text-sm">
                  {loginErrors.email.message}
                </p>
              )}
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
                {...loginRegister("password", {
                  required: t("password-required", {
                    defaultValue: "Password is required",
                  }),
                  minLength: {
                    value: 6,
                    message: t("password-min-length-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                  maxLength: {
                    value: 20,
                    message: t("password-max-length-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                })}
              />
              {loginErrors.password && (
                <p className="text-red-500 text-sm">
                  {loginErrors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log In
            </button>
            <p className="mt-4 text-sm text-center text-gray-400">
              Don’t have an account?
              <span
                onClick={handleToggle}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignUpSubmit(onSubmitRegister)}>
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
                {...signUpRegister("email", {
                  required: t("email-required", {
                    defaultValue: "Email is required",
                  }),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("email-pattern-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                })}
              />
              {signUpErrors.email && (
                <p className="text-red-500 text-sm">
                  {signUpErrors.email.message}
                </p>
              )}
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
                {...signUpRegister("password", {
                  required: t("password-required", {
                    defaultValue: "Password is required",
                  }),
                  minLength: {
                    value: 6,
                    message: t("password-min-length-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                  maxLength: {
                    value: 20,
                    message: t("password-max-length-message", {
                      defaultValue: "Invalid operation",
                    }),
                  },
                })}
              />
              {signUpErrors.password && (
                <p className="text-red-500 text-sm">
                  {signUpErrors.password.message}
                </p>
              )}
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
                {...signUpRegister("confirmPassword", {
                  required: t("password-required", {
                    defaultValue: "Please confirm your password",
                  }),
                  validate: (value, context) =>
                    value === context.password ||
                    t("password-required", {
                      defaultValue: "Invalid operation",
                    }),
                })}
              />
              {signUpErrors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {signUpErrors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
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
