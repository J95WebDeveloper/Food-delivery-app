import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function HOC(Children) {
  return function () {
    return (
      <>
        <Header />
        <Children />
        <Footer />
      </>
    );
  };
}
