import React from 'react';
// import PropTypes from 'prop-types';

// Materail UI 
import { TextField, Button, Container, Typography, Link } from "@mui/material"
// Yup Schema
import { validationSchema } from "./validationSchema";
//Formik 
import { useFormik } from "formik";

// Services
// import {getLogin} from "../../../../services/profileService"

function Login() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
    console.log('De login', values);
      (JSON.stringify(values, null, 2));
    },

  });


  return (
    <Container maxWidth="md">
  <form onSubmit={formik.handleSubmit} autoComplete="off">
  
        <TextField
          fullWidth
          required
          margin="dense"
          type="email"
          id="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.email}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.errors.email && formik.touched.email}
        />
        <TextField
          fullWidth
          required
          margin="dense"
          type="password"
          id="password"
          label="Password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.password}
          helperText={formik.touched.password && formik.errors.password}
          error={formik.errors.password && formik.touched.password}
        />

        <Button
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
        sx={{ mt: 4 }}
      >
        Validez
      </Button>

      <Typography sx={{ mt: 2 }}>
        Avez-vous déjà un compte ? <Link href="#">Se connecter</Link>
      </Typography>
      </form>
    </Container>
  );
}
Login.propTypes = {};

Login.defaultProps = {};

export default Login;