import styled from "styled-components";
// import { AbsoluteCenter } from "../../../helpers/mixins";

export const Container = styled.div`
  label {
    display: block;
    position: relative;
    padding-left: 2.3rem;
    margin-bottom: var(--m_sm);

    cursor: pointer;
    user-select: none;
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    height: 1.5rem;
    width: 1.5rem;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    border: 1px solid var(--d_green);
    border-radius: 50%;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ .checkmark:after {
    display: block;
  }

  label .checkmark:after {
    width: 1rem;
    height: 1rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    background: var(--d_green);
  }
`;
