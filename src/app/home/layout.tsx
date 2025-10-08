"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init();
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
