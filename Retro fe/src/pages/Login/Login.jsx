import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserTokenContext } from "../../context/UserTokenContext";

function Login() {
  const navigate = useNavigate();
  const { addToken } = useContext(UserTokenContext);

  async function loginUser(values) {
    try {
      const response = await fetch("http://localhost:3003/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const tokenResponse = await response.json();
      const token = tokenResponse.token;

      if (!token || typeof token !== 'string') {
        throw new Error('Invalid token received from the server');
      }

      addToken(token);
      navigate("/");
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="login">
      <div className="login_container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              loginUser(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="text" />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Link to={"/register"}>Don't have an account?</Link>
      </div>
    </div>
  );
}

export default Login;
