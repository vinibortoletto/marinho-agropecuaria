import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../helpers/mixins";

export const Banner = styled.div`
  height: 20rem;
  margin-bottom: var(--m_md);

  .bg_img {
    width: 100%;
    height: 20rem;

    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    background-image: url(${props => props.img && props.img});
    background-position: 80%;
    background-size: cover;
  }

  @media ${Breakpoint("900")} {
    height: 30rem;
    .bg_img {
      height: 30rem;
    }
  }
`;

export const Container = styled.section`
  .text {
    span {
      font-weight: bold;
    }

    p {
      text-align: justify;
      margin-bottom: var(--m_sm);
    }
  }

  .logo {
    ${FlexCenter};
    margin: 20rem 0;

    img {
      width: 100%;
      max-width: 30rem;
    }
  }

  @media ${Breakpoint("1200")} {
    .text {
      width: 30rem;

      position: absolute;
      transform: translateY(-10rem);

      background: var(--d_gold);
      border-radius: var(--br_sm);
      padding: var(--m_md);
    }
  }

  @media ${Breakpoint("2000")} {
    .text {
      padding: var(--m_lg);
    }
  }
`;
