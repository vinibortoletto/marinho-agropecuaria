import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1/4;
  text-align: center;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  button {
    color: var(--l_green);
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: 1085px) {
    grid-column: 1/5;
  }

  @media only screen and (min-width: 1200px) {
    justify-self: center;
  }
`;
