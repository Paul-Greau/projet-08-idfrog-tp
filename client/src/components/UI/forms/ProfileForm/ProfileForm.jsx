import React from 'react';
// import PropTypes from 'prop-types';

// Compoments
import UploadAvatar from './UploadAvatar/UploadAvatar';
import Particulier from './Particulier/Particulier';
// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
// Yup Schema
import { validationSchema } from './validateProfileSchema';
//Formik
import { useFormik } from 'formik';
// CSS
import { postProfileStyles } from './styles';

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      gender: '',
      pseudo: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      website: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className="profileForm" sx={{ p: 9 }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Typography sx={{ pr: 2, pt: 0.5 }} color="Secondary" variant="h5">
          Votre Profile:
        </Typography>

        <RadioGroup row name="gender">
          <FormControlLabel
            value="monsieur"
            control={<Radio />}
            label="Monsieur"
          />
          <FormControlLabel value="madame" control={<Radio />} label="Madame" />

          <UploadAvatar />
        </RadioGroup>

        <TextField
          sx={postProfileStyles.leftInput}
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
          sx={postProfileStyles.rightInput}
          required
          margin="dense"
          type="text"
          name="first_name"
          id="first_name"
          label="Nom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
          error={formik.errors.first_name && formik.touched.first_name}
        />

        <TextField
          sx={postProfileStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="first_name"
          id="first_name"
          label="Prenom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
          error={formik.errors.first_name && formik.touched.first_name}
        />

        <TextField
          sx={postProfileStyles.rightInput}
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
          sx={postProfileStyles.leftInput}
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
          sx={postProfileStyles.rightInput}
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
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          error={
            formik.errors.confirmPassword && formik.touched.confirmPassword
          }
        />

        <Particulier sx={postProfileStyles.marginBottom} />

        <TextField
          sx={postProfileStyles.leftInput}
          fullWidth
          margin="dense"
          type="text"
          id="website"
          label="Liens de vos résaux social et site web"
          defaultValue="https://"
          name="website"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.website}
          helperText={formik.touched.website && formik.errors.website}
          error={formik.errors.website && formik.touched.website}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 4, mb: 4, mr: 2 }}
        >
          ENREGISTRER VOTRE PROFILE
        </Button>

        <Button type="submit" color="primary" sx={{ mt: 4, mb: 4 }}>
          ANNULER
        </Button>
      </form>
    </Box>
  );
}
ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
