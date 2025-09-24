"use client";

import { redirect } from "next/navigation";

const Home = () => {
  const loader = () => {
    setTimeout(() => {
      redirect("/home");
    }, 100);
  };

  return <>{loader()}</>;
};

export default Home;
