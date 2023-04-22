import React from "react";
import HeaderButton from "./header/button";

function Header() {
  return (
    <div className="flex justify-between border-2 border-[#A4BC92] p-4 items-center">
      <div>
        <p className="text-6xl">&#127808;</p>
      </div>
      <div>
        <div className="flex space-x-12">
          <HeaderButton label="Rooms" className="font-medium" />

          <HeaderButton label="Status" className="font-medium" />

          <HeaderButton label="Login" className="font-medium" />
        </div>
      </div>
    </div>
  );
}

export default Header;
