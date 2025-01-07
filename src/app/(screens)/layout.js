"use client";
import { Provider } from "react-redux";
import { store, persistor } from "./../../providers/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname && pathname.startsWith("/admin");

  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <ToastContainer />
          {children}
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
