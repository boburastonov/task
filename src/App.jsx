import React from "react";
import Main from "./components/item";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="mx-auto max-w-7xl px-3 flex items-center justify-center min-h-screen">
      <Main />
      <ToastContainer />
    </div>
  );
};

export default App;
