import React from "react";
import { ErrorMessage } from "formik";

export default function Errors({ name }) {
  return (
    <div className={"error_msg "}>
      &nbsp;
      <ErrorMessage name={name} />
    </div>
  );
}
