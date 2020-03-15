import styled from "styled-components";
import { Size, FlexCenter } from "../../helpers/mixins";

export const IconSphere = styled.div`
  ${Size("2rem")};
  ${FlexCenter};

  border-radius: 100%;
  border: 1px solid var(--d_green);

  i {
    font-size: 1rem;
    color: var(--d_green);
  }
`;
