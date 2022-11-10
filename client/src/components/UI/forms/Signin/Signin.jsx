import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// Materail UI 
import { TextField, Button, Container, Typography, Link, Alert } from "@mui/material"
// Yup Schema
<<<<<<< HEAD:client/src/components/UI/forms/Signin/Signin.jsx
import { validationSchema } from "./validateSigninSchema";
=======
import { validationSchema } from "./validationSchema";
>>>>>>> develop:client/src/components/UI/forms/PostProjectForm/PostProjectForm.js
//Formik 
import { useFormik } from "formik";
import { postSignin } from '../../../../services/loginService';
import { useNavigate } from 'react-router-dom'

function Signin() {
  let navigate = useNavigate()
  const [showError, setShowError] = useState(false)
  const [loginError, setLoginError] = useState('')

  const HandleSignin = async (response) => {
    console.log('HandleSignin', response);

      if(response.status!==201){
        setLoginError({
          status : response.status,
          message: response.data.message
        })
        setShowError(true)
        return      
      } 
    return navigate("/login");
      }

  const formik = useFormik({
    initialValues: {
      pseudo: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validatinSchema,
    onSubmit: async (values) => {
      let res = await postSignin(values)
      HandleSignin(res)
    },
  });

  return (
    <Container maxWidth="md">
  <form onSubmit={formik.handleSubmit} autoComplete="off">
  {showError &&
    <Alert severity="error"
    onClose={() => {setShowError(false)}}
    >
    {`Erreur ${loginError.status} - ${loginError.message}`}
    </Alert>
    }  
        <TextField
          fullWidth
          required
          margin="dense"
          type="text"
          name="pseudo"
          id="pseudo"
          label="Pseudo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pseudo}
          helperText={formik.touched.pseudo && formik.errors.pseudo}
          error={formik.errors.pseudo && formik.touched.pseudo}
        />
    
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

        <TextField
          fullWidth
          required
          margin="dense"
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.confirmPassword}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          error={formik.errors.confirmPassword && formik.touched.confirmPassword}
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
      Vous n&apos;avez pas encore de compte ? <Link href="#">S&apos;inscrire</Link>
      </Typography>
      </form>
    </Container>
  );
}
Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;