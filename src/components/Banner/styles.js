import styled from "styled-components";
import { Size } from "../../helpers/mixins";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;

  .overlay {
    ${Size("hero")};
    background: linear-gradient(to bottom, black 50%, transparent);
    opacity: 0.4;
    position: absolute;
  }

  img {
    ${Size("hero")};
    object-fit: cover;
  }
`;
