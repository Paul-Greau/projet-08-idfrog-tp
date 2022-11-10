import React from 'react';
// import PropTypes from 'prop-types';

// Materail UI
import {
  TextField,
  Box,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from '@mui/material';
// Yup Schema
import { validationSchema } from '../validateProfileSchema';
//Formik
import { useFormik } from 'formik';
// CSS
import { postParticulierStyles } from './styles';

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      status: '',
      birth_date: '',
      birth_place: '',
      nationality: '',
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
      <RadioGroup row name="status">
        <Typography sx={{ pr: 2, pt: 0.5 }} color="Secondary" variant="h5">
          Votre Statut :
        </Typography>

        <FormControlLabel
          value="particulier"
          control={<Radio id="2" />}
          label="un particulier"
        />
        <FormControlLabel
          value="madame"
          control={<Radio id="3" />}
          label="une association"
        />
      </RadioGroup>

      <TextField
        sx={postParticulierStyles.leftInput}
        required
        margin="dense"
        type="text"
        name="birth_date"
        id="birth_date"
        label="Date de naissance"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birth_date}
        helperText={formik.touched.birth_date && formik.errors.birth_date}
        error={formik.errors.birth_date && formik.touched.birth_date}
      />

      <TextField
        sx={postParticulierStyles.rightInput}
        required
        margin="dense"
        type="text"
        name="birth_place"
        id="birth_place"
        label="Lieu de naissance"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birth_place}
        helperText={formik.touched.birth_place && formik.errors.birth_place}
        error={formik.errors.birth_place && formik.touched.birth_place}
      />

      <TextField
        sx={postParticulierStyles.leftInput}
        required
        margin="dense"
        type="text"
        id="nationality"
        label="Nationalité"
        name="nationality"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        values={formik.values.nationality}
        helperText={formik.touched.nationality && formik.errors.nationality}
        error={formik.errors.nationality && formik.touched.nationality}
      />

      <TextField
        sx={postParticulierStyles.rightInput}
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
        sx={postParticulierStyles.leftInput}
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
        sx={postParticulierStyles.rightInput}
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
        sx={postParticulierStyles.marginTop}
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
    </Box>
  );
}

ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
