import styled from "styled-components";
import { Form as Unform } from "@unform/web";
import { FlexCenter } from "../../../helpers/mixins";

export const Container = styled.div`
  .btn_container {
    ${FlexCenter()};
    margin-top: var(--m_md);

    div:nth-child(1) {
      margin-right: var(--m_sm);
    }
  }
`;
