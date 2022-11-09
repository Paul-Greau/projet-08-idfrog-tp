import React from 'react';
// import PropTypes from 'prop-types';

// Compoments

// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
} from '@mui/material';

// Yup Schema
import { validationSchema } from './validationContributSchema';

//Formik
import { useFormik } from 'formik';

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      pseudo: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',

      birth_date: '',
      birth_place: '',
      nationality: '',
      city: '',
      zip_code: '',
      phone_number: '',
      adress: '',

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
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender"
        >
          <Typography
            sx={{ pr: 2, pb: 0.5, width: '100%' }}
            color="Secondary"
            variant="h5"
          >
            Quel type de contribution souhaitez vous faire ?
          </Typography>
          <FormControlLabel
            value="invest_type"
            control={<Radio />}
            label="Contribution par Don"
          />
          <FormControlLabel
            value="invest_type"
            control={<Radio />}
            label="Contribution par Prêt"
          />
        </RadioGroup>
        <Typography sx={{ pb: 1, pt: 0.5 }} color="Secondary" variant="h5">
          Montant :
        </Typography>
        <TextField
          sx={{
            flexFlow: 1,
            mr: { xs: 2, sm: 2, md: 3, lg: 2, xl: 3 },
            width: {
              xs: '100%',
              sm: '100%',
              md: '46.2%',
              lg: '48.2%',
              xl: '49.2%',
            },
            display: { xs: 'row', md: 'colum' },
          }}
          required
          margin="dense"
          type="text"
          name="amout_target"
          id="amout_target"
          label="Montant"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amout_target}
          helperText={formik.touched.amout_target && formik.errors.amout_target}
          error={formik.errors.amout_target && formik.touched.amout_target}
        />
        <TextField
          sx={{
            mt: 2,
            width: { xs: '100%', sm: '100%', md: '48.2%', lg: '48.2%' },
            display: { xs: 'row', md: 'colum' },
          }}
          required
          margin="dense"
          type="text"
          name="card_number"
          id="card_number"
          label="Numéro de carte"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.card_number}
          helperText={formik.touched.card_number && formik.errors.card_number}
          error={formik.errors.card_number && formik.touched.card_number}
        />
        <TextField
          sx={{
            flexFlow: 1,
            mt: 2,
            mr: { xs: 2, sm: 2, md: 3, lg: 2, xl: 3 },
            width: {
              xs: '100%',
              sm: '100%',
              md: '46.2%',
              lg: '48.2%',
              xl: '49.2%',
            },
            display: { xs: 'row', md: 'colum' },
          }}
          fullWidth
          required
          margin="dense"
          type="text"
          name="expiry_date"
          id="expiry_date"
          label="Expire fin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expiry_date}
          helperText={formik.touched.expiry_date && formik.errors.expiry_date}
          error={formik.errors.expiry_date && formik.touched.expiry_date}
        />

        <TextField
          sx={{
            mt: 2,
            width: { xs: '100%', sm: '100%', md: '48.2%', lg: '48.2%' },
            display: { xs: 'row', md: 'colum' },
          }}
          fullWidth
          required
          margin="dense"
          type="security_code"
          id="security_code"
          label="Code sécurité"
          name="security_code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.security_code}
          helperText={
            formik.touched.security_code && formik.errors.security_code
          }
          error={formik.errors.security_code && formik.touched.security_code}
        />
        <FormControl fullWidth sx={{ mt: 1 }}>
          <Typography sx={{ pt: 0.5 }} color="Secondary" variant="h5">
            Laisser un commentaire :
          </Typography>
          <TextField
            sx={{ my: 2 }}
            fullWidth
            label="Votre commentaire"
            multiline
            rows={2}
            name="resume"
            id="resume"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.resume}
            helperText={formik.touched.resume && formik.errors.resume}
            error={formik.errors.resume && formik.touched.resume}
          />
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 4, mb: 4, mr: 2 }}
        >
          ENVOYEZ VOTRE CONTRIBUTION
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
