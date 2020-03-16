import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/my_logo/main.png";
import { Navbar } from "./styles";
import SearchBar from "./SearchBar/index";
import NavButtons from "./NavButtons/index";

export default function NavbarTop() {
  return (
    <Navbar>
      <Link to="/">
        <img className="logo" src={logo} alt="marinho logo" />
      </Link>
      <SearchBar />
      <NavButtons />
    </Navbar>
  );
}
