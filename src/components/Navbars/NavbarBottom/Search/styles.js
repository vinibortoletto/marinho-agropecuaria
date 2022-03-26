import styled from 'styled-components';

export const Container = styled.form`
  width: 90%;
  background: var(--l_gold);
  border-radius: var(--br_sm);

  position: fixed;
  bottom: 7rem;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);

  padding: 2rem;
  max-width: 25rem;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);

  img {
    width: 2.7rem;
    height: 1.7rem;
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
    left: 10%;
    margin-bottom: -30px;
    z-index: 1;

    border: solid 15px transparent;
    border-right-color: var(--l_gold);
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

  .input_container {
    width: 100%;
    padding: 0.7rem 1.5rem;

    border-radius: var(--br_lg);
    font-size: var(--fz_sm) !important;
    background: var(--d_gold);
  }

  input {
    width: 90%;
    font-weight: bold;
  }

  button {
    width: auto !important;
  }

  i {
    color: var(--d_green);
    font-size: var(--fz_sm) !important;
    transition: 0.2s ease-out;
  }
`;
