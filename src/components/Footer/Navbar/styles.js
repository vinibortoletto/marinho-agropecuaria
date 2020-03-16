import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  background: var(--d_green);
  color: var(--l_gold);
  padding: var(--m_lg) var(--sp_sm);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

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
  }

  .field_error {
    border: 1px solid var(--d_gold);
  }
  .error_msg {
    color: var(--d_gold);
    margin-bottom: var(--m_mini);
  }

  @media ${Breakpoint("1200")} {
    padding-left: var(--sp_md);
    padding-right: var(--sp_md);
  }
  @media ${Breakpoint("2000")} {
    padding-left: var(--sp_lg);
    padding-right: var(--sp_lg);
  }
`;
