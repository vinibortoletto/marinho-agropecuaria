import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: grid;
    justify-items: center;
  }

  .social_container {
    display: grid;
    justify-items: center;

    h2 {
      text-align: center;
      margin-bottom: 2rem;
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

  .line {
    height: 1px;
    width: 100%;
    background-color: var(--d_green);
    margin: 2rem 0;
  }

  form {
  }
`;
