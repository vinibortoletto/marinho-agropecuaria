import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Dependencies
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Container } from './styles';
import { Title } from '../../components/Title/styles';

// Components
import Input from '../../components/Form/Fields/index';
import SubmitButton from '../../components/Form/Buttons/Submit/index';

import { useAuth } from '../../contexts/Auth';

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  });

  async function handleSubmit(data, { resetForm }) {
    try {
      setError('');
      setMessage('');
      await resetPassword(data.email);

      return new Promise((res) => {
        setTimeout(() => {
          resetForm();
          res();
          setMessage('Cheque sua caixa de email para mais informações');
        }, 2000);
      });
    } catch {
      setError('Erro ao enviar email. Tente novamente.');
    }
  }

  return (
    <Container>
      <Title>Redefinir senha</Title>

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

              <div className="error">{error}</div>
              <div className="msg">{message}</div>

              <div className="btn_container">
                <SubmitButton
                  subscribe
                  isSubmitting={isSubmitting}
                  errors={errors}
                  text="Redefinir"
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="line" />

        <div className="login_container">
          <h2>
            Ainda não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </h2>
        </div>
      </section>
    </Container>
  );
}
