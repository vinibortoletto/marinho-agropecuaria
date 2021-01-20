import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Dependencies
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ButtonPill } from '../../components/Buttons/styles';
import { Container } from './styles';
import { Title } from '../../components/Title/styles';

// Components
import Input from '../../components/Form/Fields/index';
import SubmitButton from '../../components/Form/Buttons/Submit/index';

import { useAuth } from '../../contexts/Auth';

function Signup() {
  const { signup } = useAuth();
  const history = useHistory();
  const [signupData, setSignupData] = useState();
  const [error, setError] = useState('test');

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve conter pelo menos 6 letras ou números')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Senhas devem ser iguais',
    ),
  });

  async function handleSubmit(data, { resetForm }) {
    try {
      setError('');
      await signup(data.email, data.password);

      return new Promise((res) => {
        setTimeout(() => {
          resetForm();
          res();
          history.push('/');
        }, 4000);
      });
    } catch {
      setError('Erro ao criar conta. Tente novamente.');
    }
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>

      <section>
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

              <Input
                htmlFor="confirmPassword"
                label="confirmar senha"
                placeholder="confirme sua senha"
                name="confirmPassword"
                type="password"
                fieldError={
                  touched.confirmPassword && errors.confirmPassword
                    ? 'field_error'
                    : null
                }
              />

              <div className="btn_container">
                <SubmitButton
                  subscribe
                  isSubmitting={isSubmitting}
                  errors={errors}
                />

                <div className="error">{error}</div>
              </div>
            </Form>
          )}
        </Formik>

        <div className="line" />

        <div className="login_container">
          <h2>
            Já possui uma conta? <Link to="/login">Faça login</Link>
          </h2>
        </div>
      </section>
    </Container>
  );
}

export default Signup;
