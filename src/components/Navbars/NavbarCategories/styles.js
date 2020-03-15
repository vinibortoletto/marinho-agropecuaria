import styled from "styled-components";
import { FlexCenter, Size, Media } from "../../../helpers/mixins";

export const Navbar = styled.nav`
  ${FlexCenter};
  transition: 0.2s ease-in-out;

  background: var(--d_green);
  margin: 4rem -5vw 0 -5vw;
  padding: 0 5vw;

  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;

  .category_container {
    padding: var(--m_sm);
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: rgba(0, 167, 157, 0.1);
    }

    ${FlexCenter()};
    flex-direction: column;

    .img {
      ${Size("2.7rem", "1.7rem")};
      object-fit: contain;
      transition: 0.2s ease-in-out;
    }

    p {
      margin-top: var(--m_mini);
      color: var(--l_gold);
      font-size: var(--fz_mini);
      transition: 0.2s ease-in-out;
    }
  }

  &.toggle .category_container {
    img {
      ${Size("2.5rem", "1.5rem")};
    }

    p {
      display: none;
    }
  }

  display: none;
  @media ${Media("900")} {
    display: flex;
  }

  @media ${Media("1100")} {
    .category_container {
      padding: var(--m_md);

      .img {
        ${Size("3rem", "2rem")};
      }
    }

    &.toggle .category_container {
      padding: var(--m_sm);
    }
  }
`;
