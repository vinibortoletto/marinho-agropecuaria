// Dependencies
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import SubmitButton from '../../../components/Form/Buttons/Submit/index';
// Components
import Input from '../../../components/Form/Fields/index';
import { useAuth } from '../../../contexts/Auth';
import { Container } from './styles';

export default function Profile() {
  const {
    updateDisplayName,
    updateEmail,
    updatePassword,
    currentUser,
  } = useAuth();
  const [error, setError] = useState('');

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3),
    email: Yup.string().email('Email inválido'),
    password: Yup.string().min(
      6,
      'Senha deve conter pelo menos 6 letras ou números',
    ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Senhas devem ser iguais',
    ),
  });

  async function handleSubmit(data, { resetForm }) {
    try {
      setError('');
      const promises = [];

      if (data.name && data.displayName !== currentUser.displayName) {
        promises.push(updateDisplayName(data.name));
      }

      if (data.email && data.email !== currentUser.email) {
        promises.push(updateEmail(data.email));
      }

      if (data.password && data.password !== currentUser.password) {
        promises.push(updatePassword(data.password));
      }

      if (promises.length > 0) {
        return new Promise((res) => {
          setTimeout(() => {
            resetForm();
            res();

            Promise.all(promises)
              .then(() => {
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
                setError('Erro ao salvar alterações');
              });
          }, 2000);
        });
      }
    } catch {
      setError('Erro salvar alterações. Tente novamente.');
    }
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Input
              htmlFor="name"
              label="nome"
              placeholder={currentUser.displayName}
              name="name"
              type="text"
              fieldError={touched.name && errors.name ? 'field_error' : null}
            />

            <Input
              htmlFor="email"
              label="email"
              placeholder={currentUser.email}
              name="email"
              type="text"
              fieldError={touched.email && errors.email ? 'field_error' : null}
            />

            <Input
              htmlFor="password"
              label="senha"
              placeholder="Digite sua senha"
              name="password"
              type="password"
              fieldError={
                touched.password && errors.password ? 'field_error' : null
              }
            />

            <Input
              htmlFor="confirmPassword"
              label="confirmar senha"
              placeholder="Confirme sua senha"
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
                text="Salvar"
              />

              <div className="error">{error}</div>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
