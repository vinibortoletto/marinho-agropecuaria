import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { Breakpoint } from "./mixins";

export const GlobalStyles = createGlobalStyle`
  ${Reset};
  
  body {
    background-color: var(--l_gold);
    color: var(--d_green);
    font-family: var(--ff_dft);
    padding: 0 var(--sp_sm);
  } 

  .section_margin {
    margin-bottom: var(--m_hg);
  }
  
  .content {
    padding: 0 var(--m_md);
  }

  input::-webkit-input-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  input::-moz-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  textarea::-webkit-input-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  textarea::-moz-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }

  @media ${Breakpoint("1200")} {
    body {
      padding: 0 var(--sp_md);
    }
  }
  @media ${Breakpoint("2000")} {
    body {
      padding: 0 var(--sp_lg);
    }
  }
`;
