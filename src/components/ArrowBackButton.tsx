
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ArrowBackButtonProps {
  toHomeFallback?: boolean;
  className?: string;
}

const ArrowBackButton: React.FC<ArrowBackButtonProps> = ({ toHomeFallback = false, className = "" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else if (toHomeFallback) {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go Back"
      className={`fixed top-6 left-3 z-50 bg-white border-2 border-black rounded-full p-2 shadow-neo-sm hover:bg-pastel-yellow transition-colors ${className}`}
    >
      <ArrowLeft size={28} />
    </button>
  );
};

export default ArrowBackButton;
