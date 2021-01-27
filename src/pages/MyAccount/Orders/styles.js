import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--m_sm);

  .card {
    display: grid;
    justify-items: center;

    border: 1px solid var(--d_gold);
    padding: var(--m_md) var(--m_sm);
    border-radius: var(--br_sm);
    margin-bottom: var(--m_sm);
    text-align: center;

    h1 {
      font-weight: bold;
    }

    h2 {
      font-size: var(--fz_mini);
    }

    h3 {
      font-weight: bold;
      color: var(--l_green);
    }

    h4 {
      font-weight: bold;
      font-size: 1.3rem;
      margin: var(--m_sm) 0;
    }

    button {
      background-color: var(--d_gold);
      color: var(--d_green);
      font-weight: bold;
    }
  }

  .card.empty {
    align-items: center;

    button {
      margin-top: 1rem;
      background-color: transparent;
      color: var(--l_green);
      font-weight: normal;
    }
  }
`;
