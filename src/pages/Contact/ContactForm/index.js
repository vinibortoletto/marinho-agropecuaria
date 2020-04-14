import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container } from "./styles";
import Input from "../../../components/Form/Fields/index";
import SubmitButton from "../../../components/Form/Buttons/Submit/index";
import ResetButton from "../../../components/Form/Buttons/Reset/index";

export default function ContactForm() {
  const initialValues = {
    fullName: "",
    email: "",
    housePhone: "",
    cellPhone: "",
    message: "",
  };
  const requiredMsg = "Campo obrigatório";

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Nome deve conter ao menos 3 letras")
      .max(100)
      .required(requiredMsg),
    email: Yup.string().email("Email inválido").required(requiredMsg),
    housePhone: Yup.string()
      .min(14, "Telefone deve conter DDD + 8 números")
      .required(requiredMsg),
    cellPhone: Yup.string()
      .min(16, "Celular deve conter DDD + 9 números")
      .required(requiredMsg),
    message: Yup.string()
      .min(20, "Elabore um pouco mais sua menssagem")
      .required(requiredMsg),
  });

  function handleSubmit(data, { resetForm }) {
    setTimeout(() => {
      resetForm();
    }, 4000);
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          errors,
          touched,
          handleChange,
          handleBlur,
          resetForm,
        }) => (
          <Form>
            <Input
              htmlFor="fullName"
              label="Nome"
              placeholder="Seu Nome Completo"
              name="fullName"
              type="text"
              fieldError={touched.fullName && errors.fullName && "field_error"}
            />

            <Input
              htmlFor="email"
              label="Email"
              placeholder="seu@email.com"
              name="email"
              type="text"
              fieldError={touched.email && errors.email ? "field_error" : null}
            />

            <Input
              htmlFor="housePhone"
              label="Telefone fixo"
              placeholder="(12) 3456-7890"
              name="housePhone"
              type="text"
              fieldError={
                touched.housePhone && errors.housePhone ? "field_error" : null
              }
              useMask="(99) 9999-9999"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Input
              htmlFor="cellPhone"
              label="Celular"
              placeholder="(12) 3 4567-8910"
              name="cellPhone"
              type="text"
              fieldError={
                touched.cellPhone && errors.cellPhone ? "field_error" : null
              }
              useMask="(99) 9 9999-9999"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <Input
              inputType="textarea"
              htmlFor="message"
              label="Mensagem:"
              placeholder="Olá, gostaria de..."
              name="message"
              type="text"
              fieldError={
                touched.message && errors.message ? "field_error" : null
              }
            />

            <div className="btn_container">
              <ResetButton resetForm={resetForm} />
              <SubmitButton isSubmitting={isSubmitting} errors={errors} />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
