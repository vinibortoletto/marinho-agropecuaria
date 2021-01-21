import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: grid;
    justify-items: center;

    @media only screen and (min-width: 1000px) {
      grid-template-columns: 45% 10% 45%;
    }
  }

  h2 {
    font-weight: bold;
    font-size: var(--fz_md);
    text-align: center;
  }

  .email_container {
    width: 100%;
    max-width: 35rem;

    h2 {
      margin-bottom: 2rem;
    }
  }

  .social_container {
    display: grid;
    justify-items: center;

    @media only screen and (min-width: 1000px) {
      display: block;
    }

    h2 {
      margin-bottom: 2rem;
    }

    .buttons {
      display: grid;
      justify-items: center;
    }

    button {
      font-weight: bold;
      font-size: var(--fz_md);
      height: 4rem;
      margin: 0.5rem;
      width: 20rem;
    }

    i {
      margin-right: 1rem;
    }

    #login_facebook {
      background-color: #3b5998;
    }

    #login_google {
      background-color: #4285f4;
    }
  }

  .btn_container {
    display: grid;
    justify-items: end;

    button {
      width: 10rem;
    }
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: var(--d_green_trans);
    margin: 2rem 0;
  }

  .line_vertical {
    height: 100%;
    width: 1px;
    background-color: var(--d_green_trans);
    margin: 0 2rem;
  }

  .error {
    color: crimson;
    font-size: var(--fz_sm);
    text-align: right;
    margin-top: 0.5rem;
  }

  a {
    color: var(--l_green);

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    text-align: center;
  }
`;
