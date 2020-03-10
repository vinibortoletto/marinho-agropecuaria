import styled from "styled-components";
import { Size } from "../../helpers/mixins";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;

  .overlay {
    ${Size("hero")};
    background-color: black;
    opacity: 0.7;
    position: absolute;
  }

  img {
    ${Size("hero")};
    object-fit: cover;
  }
`;
