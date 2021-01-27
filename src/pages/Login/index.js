import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Dependencies
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Container } from './styles';
import { Title } from '../../components/Title/styles';
import { ButtonPill } from '../../components/Buttons/styles';

// Components
import Input from '../../components/Form/Fields/index';
import SubmitButton from '../../components/Form/Buttons/Submit/index';

import { useAuth } from '../../contexts/Auth';

function Login() {
  const { login, loginGoogle } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter pelo menos 6 letras ou números')
      .required('Campo obrigatório'),
  });

  async function handleSubmit(data, { resetForm }) {
    try {
      setError('');
      await login(data.email, data.password);

      return new Promise((res) => {
        setTimeout(() => {
          resetForm();
          res();
          history.push('/');
        }, 2000);
      });
    } catch {
      setError('Erro ao fazer login. Tente novamente.');
    }
  }

  return (
    <Container>
      <Title>Login</Title>

      <section>
        <div className="social_container">
          <div className="buttons">
            <ButtonPill
              onClick={loginGoogle}
              mini
              id="login_google"
              type="button"
            >
              <i className="fab fa-google" />
              Entar com Google
            </ButtonPill>
          </div>
        </div>

        <div className="email_container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Input
                  htmlFor="email"
                  label="email"
                  placeholder="seu@email.com"
                  name="email"
                  type="text"
                  fieldError={
                    touched.email && errors.email ? 'field_error' : null
                  }
                />

                <Input
                  htmlFor="password"
                  label="senha"
                  placeholder="digite sua senha"
                  name="password"
                  type="password"
                  fieldError={
                    touched.password && errors.password ? 'field_error' : null
                  }
                />

                <div className="btn_container">
                  <SubmitButton
                    isSubmitting={isSubmitting}
                    login
                    error={error}
                    text="Entrar"
                  />

                  <div className="error">{error}</div>
                </div>
              </Form>
            )}
          </Formik>

          <div className="line" />

          <p>
            <Link to="/esqueci-minha-senha">Esqueci minha senha</Link>
          </p>
          <p>
            Ainda não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Login;
