import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/mixins';

export const Container = styled.div`
  font-size: 1.5rem;

  button {
    width: 2.5rem;
    height: 2.5rem;

    color: var(--l_green);
    border: 1px solid var(--l_green);
    border-radius: 100%;
  }

  @media ${Breakpoint('1200')} {
    display: none;
  }
`;
