import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fName: "",
    phone: "",
    activity: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fName.trim()) newErrors.fName = "Required field";
    if (!formData.phone.trim()) newErrors.phone = "Required field";
    if (!formData.activity.trim()) newErrors.activity = "Required field";
    if (!formData.budget.trim()) newErrors.budget = "Required field";
    return newErrors;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const token = "7229813830:AAFlDf6El0NDlFH5wod5x8vT1jV-IJhEKU8";
    const chat_id = -1002226253227;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageContent = `Name: ${formData.fName} \nPhone Number: ${formData.phone} \nActivity: ${formData.activity} \nBudget: ${formData.budget}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: messageContent,
      });
      toast.success("Your data has been sent successfully!");
      setFormData({ fName: "", phone: "", activity: "", budget: "" });
      setErrors({});
      onClose();
    } catch (err) {
      console.log("Yuborishda xatolik,", err);
      toast.error("Please try again!");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 md:w-[40%] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={sendMessage} className="space-y-4">
          <div>
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              placeholder="Ismingizni yozing!"
              className={`w-full p-4 border ${
                errors.fName ? "border-red-500" : "border-gray-300"
              } text-black rounded focus-visible:outline-0`}
            />
            {errors.fName && (
              <span className="text-red-500 text-sm font-sans">
                {errors.fName}
              </span>
            )}
          </div>
          <div>
            <PhoneInput
              international
              defaultCountry="UZ"
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
              className={`w-full p-4 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } text-black rounded focus-visible:outline-0`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm font-sans">
                {errors.phone}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="activity"
              value={formData.activity}
              placeholder="Faoliyat turingiz?"
              onChange={handleChange}
              className={`w-full p-4 border ${
                errors.activity ? "border-red-500" : "border-gray-300"
              } text-black rounded focus-visible:outline-0`}
            />
            {errors.activity && (
              <span className="text-red-500 text-sm font-sans">
                {errors.activity}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Oylik reklama byudjetingiz?"
              className={`w-full p-4 border ${
                errors.budget ? "border-red-500" : "border-gray-300"
              } text-black rounded focus-visible:outline-0`}
            />
            {errors.budget && (
              <span className="text-red-500 text-sm font-sans">
                {errors.budget}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-5 rounded-md hover:opacity-90 transition duration-300 ease-in-out"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
