import styled from 'styled-components';

export const Container = styled.div`
  section {
    max-width: 35rem;
    margin: auto;
  }

  .btn_container {
    margin-top: 2rem;
    display: grid;
    justify-content: end;

    button {
      width: 10rem;
      border-radius: 100rem;
      text-align: center;
    }

    .error {
      margin-top: 0.5rem;
      text-align: right;
      color: crimson;
      font-size: var(--fz_mini);
    }
  }

  .line {
    height: 1px;
    background-color: var(--d_green_trans);
    width: 100%;
    margin: 2rem 0;
  }

  .login_container {
    display: grid;
    justify-content: center;

    h2 {
      margin-bottom: 0.5rem;
      text-align: center;
    }

    a {
      color: var(--l_green);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
