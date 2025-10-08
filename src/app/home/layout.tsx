"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PageContainer } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
};

export default Layout;
