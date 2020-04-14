import styled from "styled-components";

export const Container = styled.div`
  display: inline;

  label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: none;
    border: 1px solid var(--d_green);
    border-radius: var(--br_sm);
  }

  &:hover input ~ .checkmark {
    background-color: var(--d_green_trans);
  }

  input:checked ~ .checkmark {
    background-color: var(--d_green);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    width: 5px;
    height: 10px;

    left: 7px;
    top: 4px;

    border: solid var(--l_gold);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
