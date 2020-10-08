import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/mixins';

export const Container = styled.div`
  margin-right: var(--m_sm);

  @media ${Breakpoint('1200')} {
    margin-bottom: var(--m_md);
  }
`;
