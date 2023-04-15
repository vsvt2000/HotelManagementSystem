import React from "react";
import HeaderButton from "./header/button";

function Header() {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div>
        <div className="flex space-x-2">
          <HeaderButton />
          <HeaderButton />

          <HeaderButton />

          <HeaderButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
