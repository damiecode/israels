import React from "react";
import Background from "./assets/images/bg_image.png";

const Footer = () => {
  return (
    <div className="opacity-40 fixed inset-x-0 bottom-0">
      <img src={Background} alt="bg" />
    </div>
  )
}

export default Footer;