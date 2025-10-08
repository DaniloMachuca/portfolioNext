"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
