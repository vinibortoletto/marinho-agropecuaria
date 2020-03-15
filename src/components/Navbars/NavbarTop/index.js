import React, { useEffect } from "react";

import logo from "../../../images/logos/my_logo/main.png";
import { Navbar } from "./styles";
import SearchBar from "./SearchBar/index";
import NavButtons from "./NavButtons/index";

export default function NavbarTop() {
  return (
    <Navbar>
      <img className="logo" src={logo} alt="marinho logo" />
      <SearchBar />
      <NavButtons />
    </Navbar>
  );
}
