import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

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
// CSS
import { postContributStyles } from './styles';

function ProfileForm() {
  const formik = useFormik({
    initialValues: {
      invest_type: '',
      amount_target: '',
      card_number: '',
      expiry_date: '',
      security_code: '',
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="profileForm" sx={{ p: 9 }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Typography sx={postContributStyles.titre} variant="h5">
          Quel type de contribution souhaitez vous faire ?
        </Typography>

        <RadioGroup row name="invest_type">
          <FormControlLabel
            value="don"
            control={<Radio />}
            label="Contribution par Don"
          />
          <FormControlLabel
            value="pret"
            control={<Radio />}
            label="Contribution par Prêt"
          />
        </RadioGroup>

        <Typography
          sx={postContributStyles.titre}
          color="Secondary"
          variant="h5"
        >
          Montant :
        </Typography>

        <TextField
          sx={postContributStyles.leftInput}
          required
          margin="dense"
          type="text"
          label="Montant"
          name="amount_target"
          id="amount_target"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount_target}
          helperText={
            formik.touched.amount_target && formik.errors.amount_target
          }
          error={formik.errors.amount_target && formik.touched.amount_target}
        />

        <TextField
          sx={postContributStyles.rightInput}
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
          sx={postContributStyles.leftInput}
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
          sx={postContributStyles.rightInput}
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
            name="comment"
            id="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            helperText={formik.touched.comment && formik.errors.comment}
            error={formik.errors.comment && formik.touched.comment}
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
