import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Components
import Input from '../../../components/Form/Fields/index';
import SubmitButton from '../../../components/Form/Buttons/Submit/index';

// Styles
import { Container } from './styles';

export default function Navbar() {
  const initialValues = {
    email: '',
  };
  const requiredMsg = 'Campo obrigatório';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required(requiredMsg),
  });

  function handleSubmit(data, { resetForm }) {
    return new Promise((res) => {
      setTimeout(() => {
        resetForm();
        res();
      }, 2000);
    });
  }

  return (
    <Container>
      <section>
        <h1>Mais informações</h1>

        <ul>
          <li>
            <Link to="/quem-somos">Quem somos</Link>
          </li>
          <li>
            <Link to="/termos-e-condicoes">Termos e condições</Link>
          </li>
          <li>
            <Link to="/trocas-e-devolucoes">Trocas e devoluções</Link>
          </li>
          <li>
            <Link to="/formas-de-pagamento">Formas de pagamento</Link>
          </li>
          <li>
            <Link to="/termos-de-compra">Termos de compra</Link>
          </li>
        </ul>
      </section>

      <section>
        <h1>Contato</h1>

        <ul>
          <li>
            <Link to="/contato">Envie uma mensagem</Link>
          </li>
          <li>
            <Link to="/contato">Atendimento</Link>
          </li>
        </ul>
      </section>

      <section>
        <h1>Cadastre seu email e fique atualizado</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Input
                htmlFor="email"
                label="none"
                placeholder="seu@email.com"
                name="email"
                type="text"
                fieldError={
                  touched.email && errors.email ? 'field_error' : null
                }
              />

              <div className="btn_container">
                <SubmitButton
                  subscribe
                  isSubmitting={isSubmitting}
                  text="Cadastrar"
                />
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </Container>
  );
}
