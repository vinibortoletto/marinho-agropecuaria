import React from "react";

import { Container } from "./styles";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Form/Fields/index";
import SubmitButton from "../../../components/Form/Buttons/Submit/index";

export default function Navbar() {
  const initialValues = {
    email: ""
  };
  const requiredMsg = "Campo obrigatório";

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email inválido")
      .required(requiredMsg)
  });

  function handleSubmit(data, { resetForm }) {
    return new Promise(res => {
      setTimeout(() => {
        resetForm();
        res();
      }, 4000);
    });
  }

  return (
    <Container>
      <section>
        <h1>Mais informações</h1>

        <ul>
          <li>
            <a href="">Quem somos</a>
          </li>
          <li>
            <a href="">Termos e condições</a>
          </li>
          <li>
            <a href="">Trocas e devoluções</a>
          </li>
          <li>
            <a href="">Formas de pagamento</a>
          </li>
          <li>
            <a href="">Termos de compra</a>
          </li>
        </ul>
      </section>

      <section>
        <h1>Contato</h1>

        <ul>
          <li>
            <a href="">Envie uma mensagem</a>
          </li>
          <li>
            <a href="">Atendimento</a>
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
                  touched.email && errors.email ? "field_error" : null
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
      </section>
    </Container>
  );
}
