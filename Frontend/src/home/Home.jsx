import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import UploadBooksForm from "../components/UploadBook"; 
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <UploadBooksForm/>
      <Footer />
    </>
  );
}

export default Home;
