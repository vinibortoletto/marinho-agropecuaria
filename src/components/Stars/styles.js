import styled from 'styled-components';

export const Container = styled.div`
  i {
    margin-right: 0.2rem;

    &.active {
      color: var(--d_gold);
    }
    &.mute {
      color: var(--d_green_trans);
    }
  }
`;
