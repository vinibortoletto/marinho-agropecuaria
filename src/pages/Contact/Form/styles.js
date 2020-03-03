import styled from "styled-components";

export const Styles = styled.form`
  margin-top: var(--m_md);

  label {
    display: block;
  }

  input,
  textarea {
    width: 100%;
    border-bottom: 1px solid var(--d_green);
    padding: var(--m_sm);
  }

  .error_msg {
    color: crimson;
    font-size: var(--fz_sm);
    text-align: right;
    margin-top: 0.2rem;
  }

  .buttons {
    text-align: center;
  }

  .margin_right {
    margin-right: var(--m_sm);
  }
`;
