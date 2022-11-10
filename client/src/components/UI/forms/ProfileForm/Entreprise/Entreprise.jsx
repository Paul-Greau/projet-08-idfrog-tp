import React from 'react';
// import PropTypes from 'prop-types';

// Materail UI
import { TextField, Box, Typography } from '@mui/material';
// Yup Schema
import { validationSchema } from '../validateProfileSchema';
//Formik
import { useFormik } from 'formik';
// CSS
import { postEntrepriseStyles } from './styles';

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      siret: '',
      name: '',
      city: '',
      zip_code: '',
      phone_number: '',
      adress: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className="profileForm">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Typography sx={{ pr: 2, pt: 0.5 }} color="secondary" variant="h5">
          Information société:
        </Typography>

        <TextField
          sx={postEntrepriseStyles.leftInput}
          required
          margin="dense"
          type="text"
          name="siret"
          id="siret"
          label="Siret"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.siret}
          helperText={formik.touched.siret && formik.errors.siret}
          error={formik.errors.siret && formik.touched.siret}
        />
        <TextField
          sx={postEntrepriseStyles.rightInput}
          required
          margin="dense"
          type="text"
          name="name"
          id="name"
          label="Nom de votre société"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />

        <TextField
          sx={postEntrepriseStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          id="city"
          label="Ville"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.city}
          helperText={formik.touched.city && formik.errors.city}
          error={formik.errors.city && formik.touched.city}
        />

        <TextField
          sx={postEntrepriseStyles.rightInput}
          fullWidth
          required
          margin="dense"
          type="text"
          id="zip_code"
          label="Code postal"
          name="zip_code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.zip_code}
          helperText={formik.touched.zip_code && formik.errors.zip_code}
          error={formik.errors.zip_code && formik.touched.zip_code}
        />
        <TextField
          sx={postEntrepriseStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          id="phone_number"
          label="Téléphone"
          name="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.phone_number}
          helperText={formik.touched.phone_number && formik.errors.phone_number}
          error={formik.errors.phone_number && formik.touched.phone_number}
        />

        <TextField
          sx={postEntrepriseStyles.marginTop}
          fullWidth
          required
          margin="dense"
          type="text"
          name="adress"
          id="adress"
          label="Adresse"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.adress}
          helperText={formik.touched.adress && formik.errors.adress}
          error={formik.errors.adress && formik.touched.adress}
        />
      </form>
    </Box>
  );
}
ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
