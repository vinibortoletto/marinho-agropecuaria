import styled from 'styled-components';

export const Container = styled.div`
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

  /* Box arrow */

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-bottom: -30px;
    z-index: 1;

    border: solid 15px transparent;
    border-right-color: var(--d_green);
    transform: rotate(-90deg) translateY(-50%);
  }

  /* Hides/shows product categories on click */
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-out;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;
