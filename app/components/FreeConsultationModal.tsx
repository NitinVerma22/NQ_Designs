"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FreeConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeConsultationModal({ isOpen, onClose }: FreeConsultationModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
    toast.success("Your request has been submitted!");
    reset();
    onClose();
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      <Toaster position="top-right" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "transparent" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-2xl relative"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-semibold mb-2 text-center">Free Consultation</h2>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  {...register("fullName", { required: true })}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />
                <input
                  {...register("location", { required: true })}
                  placeholder="Project Location *"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                />

                <select
                  {...register("projectType")}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                >
                  <option value="">Select Project Type</option>
                  <option value="Interior">Interior</option>
                  <option value="Exterior">Exterior</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Construction">Construction</option>
                </select>

                <select
                  {...register("budget")}
                  className="w-full border border-gray-300 p-3 rounded-lg"
                >
                  <option value="">Select Budget Range</option>
                  <option value="1–5 Lakh">1–5 Lakh</option>
                  <option value="5–10 Lakh">5–10 Lakh</option>
                  <option value="10–25 Lakh">10–25 Lakh</option>
                  <option value="25–50 Lakh">25–50 Lakh</option>
                  <option value="50+ Lakh">50+ Lakh</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-yellow-800 text-white p-3 rounded-lg hover:bg-gray-800 transition"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
