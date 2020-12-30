import styled from 'styled-components';
import { FlexCenter } from '../../../../helpers/mixins';

export const Container = styled.div`
  ${FlexCenter};
  flex-direction: column;

  h1 {
    margin-bottom: var(--m_sm);
  }

  input {
    width: 8rem;
    padding: var(--m_mini);
    margin-right: var(--m_mini);

    border: 1px solid var(--d_green);
    border-radius: var(--br_sm);
  }

  button {
    display: inline-block;
  }

  a {
    font-size: var(--fz_mini);
    color: var(--l_green);

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: var(--fz_mini);
    color: crimson;
    font-style: italic;
    display: none;
  }

  /* When deliveryOption is set to store, cepNumber becomes mute  */
  .cepNumber.mute {
    pointer-events: none;

    h1 {
      color: grey;
    }

    input {
      border-color: grey;
      color: grey;

      &::placeholder {
        color: darkgrey;
      }
    }

    button {
      background-color: darkgrey;
    }

    a {
      color: darkgrey;
    }
  }
`;
