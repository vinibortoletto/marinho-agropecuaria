import styled from "styled-components";
import { Size, FlexCenter } from "../../../helpers/mixins";

export const Navbar = styled.nav`
  ${Size("100%", "5rem")};
  padding: 1rem 1.5rem;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: var(--d_green);
  color: var(--l_gold);

  ul {
    height: 100%;
    ${FlexCenter};
    justify-content: space-between;

    li {
      text-align: center;
    }

    i {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
