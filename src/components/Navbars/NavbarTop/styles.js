import styled from "styled-components";
import { FlexCenter, Size } from "../../../helpers/mixins";

export const Navbar = styled.nav`
  ${FlexCenter};
  justify-content: space-between;
  padding: 1rem 0;

  /* Logo */
  .logo {
    ${Size("10rem", "3rem")};
  }

  /* Buttons */
  .btn-container {
    ${FlexCenter};
  }
  button {
    position: relative;
    margin-right: 1rem;
  }
  button:nth-last-child(1) {
    margin-right: 0;
  }

  .counter {
    ${Size("1.5rem")};
    ${FlexCenter};

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background-color: var(--l_green);
    color: var(--l_gold);
    border-radius: var(--br_sm);
    font-weight: bold;
  }
`;
