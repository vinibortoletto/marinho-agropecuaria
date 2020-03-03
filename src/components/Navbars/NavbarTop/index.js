import React from "react";

// Logos
import { ReactComponent as MainLogo } from "../../../images/logos/my_logo/main.svg";
// import { ReactComponent as MiniLogo } from "../0__images/logos/my_logo/mini.svg";
// import { ReactComponent as WhiteLogo } from "../0__images/logos/my_logo/white.svg";

// Styles
import { Navbar } from "./styles";
import { IconSphere } from "../../IconSphere/styles";

export default function NavbarTop() {
  return (
    <Navbar>
      <MainLogo className="logo" />

      <div className="btn-container">
        <button>
          <IconSphere>
            <i className="fas fa-user"></i>
          </IconSphere>
        </button>

        <button>
          <IconSphere>
            <i className="fas fa-heart"></i>
            <span className="counter">0</span>
          </IconSphere>
        </button>
      </div>
    </Navbar>
  );
}
