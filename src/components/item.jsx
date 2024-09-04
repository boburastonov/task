import React, { useState } from "react";
import btnImage from "../assets/btn-bg.png";
import heroImg from "../assets/hero-img.png";
import Modal from "./modal";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="hero flex h-full md:flex-row flex-col w-full rounded-2xl items-center justify-center md:py-0 py-10 md:pl-16">
      <div className="md:w-[60%] w-[90%]">
        <h1 className="md:text-[30px] text-[23px] md:text-left text-center font-black text-[#ABABAB] uppercase md:mb-14 mb-7">
          <span className="text-[#dbc470]">30 kun ichida</span> sotuvlaringizni
          bir necha barobarga oshiramiz yoki{" "}
          <span className="text-[#dbc470]">pulingizni qaytaramiz!</span>
        </h1>
        <p className="md:w-[70%] w-[90%] text-[#fff] md:text-2xl text-[19px] md:mb-14 mb-7 text-center">
          <span className="text-[#FCCB6F]">
            Bizning marketing xizmatimiz bilan
          </span>{" "}
          siz hozirgi sotuvlaringizni 30 kun ichida bir necha barobarga oshishga
          kafolat beramiz, aks holda{" "}
          <span className="text-[#FCCB6F]">1 tiyin ham to'lamaysiz!</span>
        </p>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 flex items-center uppercase rounded-xl md:w-[50%] w-[70%] md:mr-auto mx-auto md:ml-16 md:text-2xl text-[18px] text-black hover:opacity-90"
        >
          <img className="md:w-20 w-[50px] mr-3" src={btnImage} />
          <span>ro'yxatdan o'tish</span>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <img className="md:w-[40%] md:rounded-br-2xl w-[60%]" src={heroImg} />
    </div>
  );
};

export default Main;
