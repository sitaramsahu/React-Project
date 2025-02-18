import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("User Login Data:", data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://your-image-url.com')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <Card className="w-full max-w-md shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Login
              </Button>
            </form>

            <p className="text-sm text-center text-gray-500 mt-3">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold text-center mb-4">
              Login Successful
            </h2>
            <p className="text-center text-gray-700 mb-4">
              You have logged in successfully. Welcome to the dashboard!
            </p>
            <div className="flex justify-center">
              <Button
                onClick={closeModal}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
