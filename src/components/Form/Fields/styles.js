import styled from "styled-components";

export const Container = styled.div`
  label {
    display: block;
    text-transform: capitalize;

    margin-top: var(--m_sm);
    &.no_margin_top {
      margin-top: 0;
    }
  }

  input,
  textarea {
    width: 100%;
    border-bottom: 1px solid
      ${props => (props.errorMsg === true ? "crimson" : "var(--d_green)")};

    padding: var(--m_sm);
  }

  .field_error {
    border-bottom-color: crimson;
  }

  .error_msg {
    color: crimson;
    font-size: var(--fz_mini);
    text-align: right;
  }
`;
