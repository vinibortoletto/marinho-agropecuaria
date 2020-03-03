import styled from "styled-components";
import { Size } from "../../helpers/mixins";

export const ButtonPill = styled.button`
  ${props => (props.mini ? `${Size("buttonMini")}` : `${Size("button")}`)};
  border-radius: 2rem;
  border: ${props => (props.transparent ? "1px solid var(--l_green)" : "none")};

  font-weight: bold;
  font-size: ${props => (props.mini ? "var(--fz_sm)" : "var(--fz_md)")};

  color: ${props => (props.transparent ? "var(--l_green)" : "var(--l_gold)")};
  background-color: ${props =>
    props.transparent ? "transparent" : "var(--l_green)"};
`;

export const ButtonSquare = styled(ButtonPill)`
  border-radius: var(--br_sm);
`;

export const ButtonBullet = styled(ButtonPill)`
  width: 100%;
  border-radius: var(--br_sm) 2rem 2rem var(--br_sm);

  text-align: right;
  padding-right: var(--m_md);
`;
