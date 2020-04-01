import styled from "styled-components";

export const Container = styled.div`
  hr {
    width: 100%;
    height: 1px;

    margin: ${props => (props.margin ? props.margin : "var(--m_sm)")} 0;
    background: ${props =>
      props.bgColor ? props.bgColor : "var(--d_green_trans)"};
    border: none;
  }
`;
