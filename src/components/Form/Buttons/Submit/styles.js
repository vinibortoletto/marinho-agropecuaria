import styled from 'styled-components';

export const Container = styled.div`
  button {
    position: relative;
    overflow: hidden;

    p {
      position: relative;
      z-index: 1;
      font-weight: bold;
    }
  }

  .loading_bg {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: -100%;
    z-index: 1;

    background-color: var(--l_green);
  }

  .loading_animation {
    animation: loadingAnimation 2s ease-in-out forwards;
  }

  @keyframes loadingAnimation {
    0% {
      left: -100%;
    }
    20% {
      left: -80%;
    }
    70% {
      left: -60%;
    }
    100% {
      left: 0%;
    }
  }
`;
