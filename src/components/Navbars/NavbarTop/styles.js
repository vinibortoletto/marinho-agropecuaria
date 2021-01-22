import styled from 'styled-components';
import { FlexCenter, Size, Breakpoint } from '../../../helpers/mixins';

export const Container = styled.nav`
  ${FlexCenter};
  ${Size('100%', '4rem')};

  justify-content: space-between;
  padding: var(--m_mini) var(--sp_sm);

  position: fixed;
  left: 0;
  right: 0;
  z-index: 11;

  background: ${(props) => (props.simple ? `var(--d_green)` : `var(--l_gold)`)};

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

  .user_container {
    height: 4rem;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;

    &:hover .hidden_content {
      opacity: 1;
      pointer-events: all;
    }
  }

  .btn_user {
    ${FlexCenter()};

    & > div {
      order: 2;
      margin-left: 1rem;
    }

    p {
      text-align: right;
      width: 7rem;
      font-size: var(--fz_mini);
      margin-left: var(--m_mini);
      order: 1;

      span {
        color: var(--l_green);
        font-weight: bold;
      }
    }

    @media ${Breakpoint('900')} {
      & > div {
        order: 1;
        margin-left: 0;
      }
      p {
        text-align: left;
      }
    }

    a {
      color: var(--l_green);
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .hidden_content {
    &.logged {
      width: auto;

      a {
        width: 100%;

        &:hover {
          text-decoration: underline;
        }
        &:nth-last-child(1) {
          margin-top: 1rem;
        }
      }
    }

    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease;

    width: 16rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    position: absolute;
    top: 0.3rem;
    right: -5%;

    @media ${Breakpoint('900')} {
      left: -5%;
    }

    padding: 2.5rem var(--m_sm) var(--m_sm) var(--m_sm);

    border-radius: var(--br_sm);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    background-color: var(--l_gold);
    font-size: var(--fz_sm);

    button {
      width: 12rem;
      margin: 0;
      padding: 0 var(--m_sm);

      color: var(--l_gold);
      font-weight: bold;
    }

    #login_email {
      margin-bottom: 0.5rem;
    }

    #login_google {
      background-color: #4285f4;
    }

    #signup {
      color: var(--l_green);
    }

    i {
      margin-right: 0.5rem;
    }
    p {
      margin-bottom: 0.5rem;
    }

    .line {
      width: 100%;
      height: 1px;
      background-color: var(--d_green_trans);
      margin: 1rem 0;

      &.strong {
        height: 2px;
      }
    }
  }

  .btn_favorites,
  .btn_cart {
    .counter {
      ${Size('1.3rem')};
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

  @media ${Breakpoint('900')} {
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

  @media ${Breakpoint('1200')} {
    padding-right: var(--sp_md);
    padding-left: var(--sp_md);
  }

  @media ${Breakpoint('2000')} {
    padding-right: var(--sp_lg);
    padding-left: var(--sp_lg);
  }
`;
