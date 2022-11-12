import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// Components
import UploadImages from './uploadImg/UploadImages';

// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  CardHeader,
  Card,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarHalfIcon from '@mui/icons-material/StarHalf';
// Yup Schema
import { validationSchema } from './validatePostProjectSchema';
//Formik
import { useFormik } from 'formik';
// CSS
import { postProjectStyles } from './styles';
// Tableau des categories
import { category } from './category';

function PostProjectForm() {

  const formik = useFormik({
    initialValues: {
      name: '', 
      title: '',
      category: '',
      resume: '',
      description: '',
      amount_target: '',
      invest_type: '',
      date: '',
      website: '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className="postProjectForm">
      <UploadImages />

      <form onSubmit={formik.handleSubmit} autoComplete="off">
      <TextField
          sx={postProjectStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="name"
          id="name"
          label="Nom de votre projet"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />
        
        <TextField
          sx={postProjectStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="title"
          id="title"
          label="Titre de votre projet"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          helperText={formik.touched.title && formik.errors.title}
          error={formik.errors.title && formik.touched.title}
        />

        <Select
          sx={postProjectStyles.rightInput}
          name="category"
          label="Catégories"
          displayEmpty
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <MenuItem value="">
            <em>CATEGORIES DU PROJET</em>
          </MenuItem>
          {category.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>

        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="Résumé du projet..."
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

        <Typography sx={{ pb: 1, pt: 0.5 }} color="Secondary" variant="h5">
          Décrivez en détail votre projet :
        </Typography>

        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="Déscription du projet..."
          multiline
          rows={8}
          name="description"
          id="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          helperText={formik.touched.description && formik.errors.description}
          error={formik.errors.description && formik.touched.description}
        />

        <Typography sx={{ pb: 2, pt: 0.5 }} color="Secondary" variant="h5">
          Montant dont vous avez besoin ?
        </Typography>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <InputLabel htmlFor="amount_target">Montant</InputLabel>
          <OutlinedInput
            startAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Montant"
            name="amount_target"
            id="amount_target"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount_target}
            error={formik.errors.amount_target && formik.touched.amount_target}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <Typography sx={{ pb: 0.5, pt: 0.5 }} color="Secondary" variant="h5">
            Quel type de financement recherchez vous ?
          </Typography>
          <Typography variant="p" color="secondary">
            Financement participatif non ditutif auoprès d&apos;investisseurs ou
            des dons
          </Typography>
        </FormControl>

        <RadioGroup row
        name="invest_type"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.invest_type}
        >
          <Card sx={{ width: '100%', mb: 4 }}>
            <CardHeader
              avatar={<StarHalfIcon />}
              action={
                <FormControlLabel value="pret" control={<Radio id="0" />} />
              }
              title="Financement avec prêt"
              subheader="Retour sur investisseme par rapport à la mise"
            />
            <CardHeader
              avatar={<FavoriteIcon />}
              action={
                <FormControlLabel value="dons" control={<Radio id="1" />} />
              }
              title="Financement par dons"
              subheader="Avec ou sans compteparties non financières"
            />
          </Card>
        </RadioGroup>

        <InputLabel>Durée de votre campagne:</InputLabel>

        <TextField
          sx={{ mt: 2 }}
          fullWidth
          margin="dense"
          type="date"
          id="date"
          name="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.date}
          helperText={formik.touched.date && formik.errors.date}
          error={formik.errors.date && formik.touched.date}
        />

        <TextField
          sx={{ mt: 2 }}
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

PostProjectForm.propTypes = {};

PostProjectForm.defaultProps = {};

export default PostProjectForm;
