import styled from 'styled-components';

export const Container = styled.div`
  /* display: ${(props) => props.show}; */

  width: 90%;
  background: var(--d_green);
  color: var(--l_gold);
  border-radius: var(--br_sm);

  position: fixed;
  top: 12rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  padding: 3rem;
  max-width: 25rem;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);

  img {
    width: 2.7rem;
    height: 1.7rem;
    background: var(--d_green);
  }

  p {
    margin-top: 0.7rem;
    text-transform: capitalize;
  }
`;
