import React from "react";
import { Field } from "formik";
import InputMask from "react-input-mask";

import { Container } from "./styles";
import Errors from "../Errors/index";

export default function Input({
  htmlFor,
  label,
  placeholder,
  name,
  type,
  fieldError,
  useMask,
  handleChange,
  handleBlur,
  inputType
}) {
  const housePhoneMask = "(99) 9999-9999";
  const cellPhoneMask = "(99) 9 9999-9999";

  function handleTextareaSize() {
    const textarea = document.getElementById("textarea");
    textarea.setAttribute("rows", "8");
  }

  return (
    <Container>
      {
        (label = "none" ? (
          <label htmlFor={htmlFor}></label>
        ) : (
          <label htmlFor={htmlFor}>{label}:</label>
        ))
      }

      {useMask ? (
        <InputMask
          name={name}
          type={type}
          placeholder={placeholder}
          className={fieldError}
          mask={useMask === "housePhone" ? housePhoneMask : cellPhoneMask}
          onChange={handleChange}
          onBlur={handleBlur}
          maskChar={null}
        />
      ) : (
        <Field
          as={inputType && inputType}
          rows={inputType === "textarea" ? "1" : ""}
          onFocus={() =>
            inputType === "textarea" ? handleTextareaSize() : null
          }
          name={name}
          type={type}
          placeholder={placeholder}
          className={fieldError}
          id={inputType === "textarea" ? "textarea" : null}
        />
      )}

      <Errors name={name} />
    </Container>
  );
}
