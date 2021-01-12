import styled from 'styled-components';
import { FlexCenter, Breakpoint } from '../../../../helpers/mixins';

export const Container = styled.div`
  width: 100%;
  ${FlexCenter()};
  margin: 0 var(--m_sm);
  padding: 0.7rem 1.5rem;

  border-radius: var(--br_lg);
  font-size: var(--fz_sm);
  background: var(--d_gold);

  input {
    width: 100%;
    font-weight: bold;
  }

  display: none;
  @media ${Breakpoint('900')} {
    display: flex;
  }
`;
