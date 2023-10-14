import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext(undefined);

export const useGlobalToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const defaultToastOptions = {
  autoClose: 3000,
  position: "bottom-right",
};

const ToastProvider = ({ children }) => {
  const showSuccessToast = (message, options) => {
    toast.success(message, { ...defaultToastOptions, ...options });
  };

  const showWarningToast = (message, options) => {
    toast.warning(message, { ...defaultToastOptions, ...options });
  };

  const showErrorToast = (message, options) => {
    toast.error(message, { ...defaultToastOptions, ...options });
  };

  const showInfoToast = (message, options) => {
    toast.info(message, { ...defaultToastOptions, ...options });
  };

  return (
    <ToastContext.Provider
      value={{
        showSuccessToast,
        showWarningToast,
        showErrorToast,
        showInfoToast,
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
