import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const LogoutButton = ({ setToken }) => {
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem("authToken"); // Optional: Clear stored token
    sessionStorage.removeItem("authToken");

    toast.success("Logged out successfully! 🚀");
  };

  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
      aria-label="Logout"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </motion.button>
  );
};

export default LogoutButton;
