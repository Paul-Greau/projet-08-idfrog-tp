import React from 'react';
// import PropTypes from 'prop-types';

// Materail UI 
import { TextField, Button, Container, Typography, Link } from "@mui/material"
// Yup Schema
import { validationSchema } from "../../forms/validationSchema";
//Formik 
import { useFormik } from "formik";

function PostProjectForm() {
  
  const formik = useFormik({
    initialValues: {
      pseudo: "",
      name:"",
      lastname:"",
      email: "",
      website: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="md">
  <form onSubmit={formik.handleSubmit} autoComplete="off">
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
          type="text"
          name="name"
          id="name"
          label="Nom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />

        <TextField
          fullWidth
          required
          margin="dense"
          type="text"
          name="lastname"
          id="lastname"
          label="Prenom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
          helperText={formik.touched.lastname && formik.errors.lastname}
          error={formik.errors.lastname && formik.touched.lastname}
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
          type="website"
          id="website"
          label="Site Web"
          name="website"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.website}
          helperText={formik.touched.website && formik.errors.website}
          error={formik.errors.website && formik.touched.website}
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
      Vus n&apos;avez pas encore de compte ? <Link href="#">S&apos;inscrire</Link>
      </Typography>
      </form>
    </Container>
  );
}
PostProjectForm.propTypes = {};

PostProjectForm.defaultProps = {};

export default PostProjectForm;