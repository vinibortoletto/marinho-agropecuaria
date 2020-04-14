import styled from "styled-components";
import { FlexCenter, Size, Breakpoint } from "../../../helpers/mixins";

export const Container = styled.nav`
  ${FlexCenter};
  ${Size("100%", "4rem")};

  justify-content: space-between;
  padding: var(--m_mini) var(--sp_sm);

  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;

  background: ${props => (props.simple ? `var(--d_green)` : `var(--l_gold)`)};

  .logo {
    width: 8rem;
  }

  .btn_container {
    ${FlexCenter};
  }
  button {
    position: relative;
    color: var(--d_green);
    margin-right: var(--m_sm);
  }

  .btn_user {
    ${FlexCenter()};

    p {
      width: 7rem;
      font-size: var(--fz_mini);
      margin-left: var(--m_mini);

      display: none;
      @media ${Breakpoint("600")} {
        display: block;
      }
    }

    a {
      color: var(--l_green);
      font-weight: bold;
    }
  }

  .btn_favorites,
  .btn_cart {
    .counter {
      ${Size("1.3rem")};
      ${FlexCenter};

      position: absolute;
      top: -0.5rem;
      right: -0.5rem;

      font-size: var(--fz_sm);
      background-color: var(--d_gold);
      color: var(--d_green);
      border-radius: var(--br_sm);
    }
  }

  .btn_favorites {
    margin-right: 0;
  }

  .btn_cart {
    display: none;
  }

  &.page_not_found {
    background: var(--d_green);
  }

  @media ${Breakpoint("900")} {
    .logo_container {
      width: 13rem;
    }

    .btn_cart {
      display: block;
    }

    .btn_favorites {
      margin-right: var(--m_sm);
    }
  }

  @media ${Breakpoint("1200")} {
    padding-right: var(--sp_md);
    padding-left: var(--sp_md);
  }

  @media ${Breakpoint("2000")} {
    padding-right: var(--sp_lg);
    padding-left: var(--sp_lg);
  }
`;
