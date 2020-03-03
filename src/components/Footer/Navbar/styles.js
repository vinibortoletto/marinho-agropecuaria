import styled from "styled-components";

export const Container = styled.section`
  background: var(--d_green);
  color: var(--l_gold);
  padding: var(--m_lg) var(--sp_sm);

  section {
    margin-bottom: var(--m_lg);

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  h1 {
    font-weight: bold;
    margin-bottom: var(--m_sm);
  }

  li {
    line-height: 1.7;

    &:hover {
      text-decoration: underline;
    }
  }

  input::-webkit-input-placeholder {
    color: var(--l_gold);
  }
  input::-moz-placeholder {
    color: var(--l_gold);
  }
  textarea::-webkit-input-placeholder {
    color: var(--l_gold);
  }
  textarea::-moz-placeholder {
    color: var(--l_gold);
  }

  input {
    width: 100%;
    border: 1px solid var(--l_green);
    border-radius: var(--br_sm);
    padding: var(--m_sm);
    margin-bottom: 0.5rem;
  }

  .btn_wrapper {
    text-align: right;
  }
`;
