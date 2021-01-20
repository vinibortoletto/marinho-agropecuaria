import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ButtonPill } from '../../components/Buttons/styles';
import { Container } from './styles';
import { Title } from '../../components/Title/styles';

import Input from '../../components/Form/Fields';
import SubmitButton from '../../components/Form/Buttons/Submit';

import { useAuth } from '../../contexts/Auth';

function Login() {
  // const {login} = useAuth()

  const initialValues = {
    email: '',
    password: '',
  };
  const requiredMsg = 'Campo obrigatório';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required(requiredMsg),
    password: Yup.string().required(requiredMsg),
  });

  function handleSubmit(data, { resetForm }) {
    return new Promise((res) => {
      setTimeout(() => {
        resetForm();
        res();
      }, 4000);
    });
  }

  return (
    <Container>
      <Title>Login</Title>

      <section>
        <div className="social_container">
          <ButtonPill mini id="login_facebook" type="button">
            <i className="fab fa-facebook-f" />
            Entar com Facebook
          </ButtonPill>

          <ButtonPill mini id="login_google" type="button">
            <i className="fab fa-google" />
            Entar com Google
          </ButtonPill>
        </div>

        <div className="line" />

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
                label="password"
                name="password"
                type="password"
                fieldError={
                  touched.password && errors.password ? 'field_error' : null
                }
              />

              <div className="btn_container">
                <SubmitButton
                  subscribe
                  isSubmitting={isSubmitting}
                  errors={errors}
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="signup_container">
          <h2>Não possui uma conta?</h2>
          <Link to="/cadastro">
            <ButtonPill transparent>Cadastre-se</ButtonPill>
          </Link>
        </div>
      </section>
    </Container>
  );
}

export default Login;
