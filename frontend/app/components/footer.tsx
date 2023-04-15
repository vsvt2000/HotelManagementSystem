import React from "react";
import FooterButton from "./footer/button";

function Footer() {
  return (
    <div>
      <div>Copyright</div>
      <div className="flex space-x-2">
        <div><FooterButton/>Contact</div>
        <div><FooterButton/></div>
        <div><FooterButton/></div>
      </div>
    </div>
  );
}

export default Footer;
