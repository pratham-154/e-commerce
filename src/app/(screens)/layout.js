"use client";
import { Provider } from "react-redux";
import { store, persistor } from "./../../providers/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function layout({ children }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          {children}
        </PersistGate>
      </Provider>
    </>
  );
}
