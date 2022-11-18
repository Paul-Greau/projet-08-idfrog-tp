import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';

// Materail UI
import {
  TextField,
  Button,
  Container,
  Typography,
  Link,
  Alert,
} from "@mui/material";
// Yup Schema
import { validationSchema } from "./validateLoginSchema";
//Formik
import { useFormik } from "formik";
import { postLogin } from "../../../../services/loginService";
import { useSetRecoilState } from "recoil";
import { profileConnexionstate } from "../../../../atomes/profileAtomes";
import { useNavigate } from "react-router-dom";

// Services
// import {getLogin} from "../../../../services/profileService"

function Login() {
  let navigate = useNavigate();
  const setProfileInfo = useSetRecoilState(profileConnexionstate);
  const [showError, setShowError] = useState(false);
  const [loginError, setLoginError] = useState("");

  const HandleLogin = (response) => {
    //console.log("handleLogin", response);
    if (response.status !== 200) {
      setLoginError({
        status: response.status,
        message: response.data.message,
      });
      setShowError(true);
      return;
    }
    response.data.isLogged = true;
    setProfileInfo(response.data);
    return navigate("/profile");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let res = await postLogin(values);
      // console.log('response dans login', res.data);
      HandleLogin(res);
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        {showError && (
          <Alert
            severity="error"
            onClose={() => {
              setShowError(false);
            }}
          >
            {`Erreur ${loginError.status} - ${loginError.message}`}
          </Alert>
        )}

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
