import React from "react";

//? Modules Import
import NavbarLogoCompanyName from "../modules/navbar-logo-companyName";
import NavbarLinks from "../modules/navbar-links";

export default function Navbar() {
  return (
    <div className="w-full h-full px-30 py-2 flex justify-between items-center border-b border-gray-200">
      <NavbarLogoCompanyName />
      <NavbarLinks />
    </div>
  );
}
