import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const NewsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
      >
        <AlertCircle className="text-blue-500 w-12 h-12 mb-4 animate-pulse" />
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          As notícias ficarão disponíveis em breve
        </h1>
      </motion.div>
    </div>
  );
};

export default NewsPage;
