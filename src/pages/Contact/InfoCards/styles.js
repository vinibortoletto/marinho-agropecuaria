import styled from "styled-components";

export const Styles = styled.section`
  display: grid;
  grid-template-columns: 25% 75%;

  padding: 0 var(--m_sm);
  padding-bottom: var(--m_md);
  border-bottom: 1px solid var(--d_green_trans);

  margin-bottom: var(--m_md);
  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  .margin_bottom {
    margin-bottom: var(--m_sm);
  }

  .italic {
    font-style: italic;
  }

  .small_text {
    font-size: var(--fz_sm);
  }

  .muted {
    color: grey;
    text-decoration: line-through;
  }
`;
