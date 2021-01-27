import styled from 'styled-components';

export const Container = styled.div`
  .categories {
    display: block;
    margin-bottom: 2rem;

    button {
      color: var(--d_green);
      opacity: 0.7;
      transition: 0.2s ease;

      &:nth-child(1) {
        margin-right: 1rem;
      }

      &#selected {
        opacity: 1;
      }
    }

    i {
      margin-right: 1rem;
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 1000px) {
    section {
      display: grid;
      grid-template-columns: 20% 80%;
    }

    .categories button {
      display: block;
      &:nth-child(1) {
        margin-bottom: 1rem;
      }
    }
  }
`;
