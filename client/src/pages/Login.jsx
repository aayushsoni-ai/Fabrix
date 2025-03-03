import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [error, setError] = useState("");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (currentState === "Signup") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(`${currentState} successful! ✅`);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(`${currentState} successful! ✅`);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      setError(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1026149/pexels-photo-1026149.jpeg')",
      }}
    >
      {/* ✅ Full-screen Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
  
      {/* Full-Page Login Form */}
      <div className="relative z-10 p-8 shadow-xl backdrop-blur-md bg-white/20 border border-white/30 rounded-xl w-96">
        <h2 className="text-center text-2xl font-semibold text-white">
          {currentState}
        </h2>
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
  
        {currentState === "Signup" && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 mt-4 border border-gray-300 rounded-md bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
  
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mt-4 border border-gray-300 rounded-md bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mt-4 border border-gray-300 rounded-md bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <button
          type="submit"
          onClick={handleSubmitUser}
          className="w-full mt-6 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          {currentState}
        </button>
  
        <p
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Signup" : "Login")
          }
          className="text-center mt-4 text-white cursor-pointer"
        >
          {currentState === "Login"
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
  
};

export default Login;
