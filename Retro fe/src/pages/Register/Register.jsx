import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../context/UserTokenContext";

function Register() {
  const { addToken } = useContext(UserTokenContext);
  const navigate = useNavigate();
  async function registerUser(values) {
    try {
      const response = await fetch("http://localhost:3003/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const tokenResponse = await response.json();
      const token = tokenResponse.token;
      console.log(response);
      console.log(tokenResponse);
      console.log(token);



      if (!token || typeof token !== "string") {
        throw new Error("Invalid token received from the server");
      }

      addToken(token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
   <>
    <Formik
      initialValues={{ email: "", nickName: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        nickName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          registerUser(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="nickName">Nickname</label>
        <Field name="nickName" type="text" />
        <ErrorMessage name="nickName" />

        <label htmlFor="email">Password</label>
        <Field name="password" type="text" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    <input type="file" name="" id="" />
   </>
  );
}

export default Register;
