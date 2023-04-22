import React from "react";
import FooterButton from "./footer/button";

function Footer() {
  return (
    <div className="p-4 ">
      <div className="flex space-x-2 ">
        <div>
          <FooterButton type="linkedIn" />
        </div>
        <div>
          <FooterButton type="mail" />
        </div>
      </div>
      <div>
        <p className="text-xs">Copyright. All rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
