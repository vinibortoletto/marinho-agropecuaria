import styled from "styled-components";
import { Size, FlexCenter, Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  margin-bottom: var(--m_md);
  ${FlexCenter};
  flex-direction: column;

  .productDetails_img-container {
    border: 1px solid var(--d_green_trans);
    border-radius: var(--br_sm);
    margin-bottom: var(--m_sm);

    width: 25rem;
    height: 25rem;
    display: flex;
  }

  img {
    width: 100%;
    max-height: 20rem;
    object-fit: contain;

    padding: var(--m_sm);

    &.animation {
      animation: blink 0.2s ease-in-out;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .dots {
    ${FlexCenter};

    .dot {
      ${Size("1.5rem")};
      ${FlexCenter};

      border: 1px solid var(--d_green);
      border-radius: var(--br_circle);

      margin-right: var(--m_sm);
      &:nth-last-child(1) {
        margin-right: none;
      }

      &.selected::after {
        content: "";
        display: block;

        ${Size("1rem")};
        background: var(--d_green);
        border-radius: var(--br_circle);
      }
    }
  }

  @media ${Breakpoint("800")} {
    img {
      max-width: 25rem;
      max-height: 25rem;
    }
  }
`;
