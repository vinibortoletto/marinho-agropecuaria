import React from "react";

import { Container } from "./styles";
import Navbar from "./Navbar/index";
import Copyright from "./Copyright/index";

export default function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <Navbar />
        <Copyright />
      </div>
    </Container>
  );
}
