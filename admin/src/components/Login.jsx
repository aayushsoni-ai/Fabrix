import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(backendUrl + "/api/user/admin", { email, password });
      console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successfully! 🚀");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1026149/pexels-photo-1026149.jpeg')" }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <form 
        onSubmit={handleSubmitAdmin} 
        className="relative z-10 p-8 shadow-lg backdrop-blur-md bg-white/30 rounded-xl w-96"
      >
        <h2 className="text-center text-2xl font-semibold text-white">Login</h2>
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

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
          className="w-full mt-6 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
