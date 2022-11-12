import React from 'react';
// import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { profileDetailState } from '../../../../atomes/profileAtomes';

// Compoments
import Particulier from './Particulier/Particulier';
// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
//  FormControlLabel,
//  RadioGroup,
 // Radio,
} from '@mui/material';
// Yup Schema
import { validationSchema } from './validateProfileSchema';
//Formik
import { useFormik } from 'formik';
// CSS
import { postProfileStyles } from './styles';
import { useEffect } from 'react';



function ProfileForm() {



  // TODO EVOLUTION PRE-REMPLIR LE FORMULAIRE //
  const profileDetail = useRecoilValue(profileDetailState);
  console.log("profileDetail in profileForm", profileDetail);

  let formik = useFormik({
    initialValues: {
      pseudo: profileDetail.pseudo,
      email: profileDetail.email,
/*       password: '',
      confirmPassword: '', */
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      console.log(values);

      alert(JSON.stringify(values, null, 2));
    },
  });  

  


  useEffect(() => {  

  },[profileDetail])

  return (
    
    <Box className="profileForm" sx={{ p: 9 }}>
      {profileDetail.pseudo &&(

        <><form onSubmit={formik.handleSubmit} autoComplete="off">
          <Typography sx={{ pr: 2, pt: 0.5 }} color="Secondary" variant="h5">
            Votre Profile:
          </Typography>          

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
            error={formik.errors.pseudo && formik.touched.pseudo} />         

          <TextField
            sx={postProfileStyles.rightInput}
            fullWidth
            required
            margin="dense"
            type="email"
            id="email"
            label="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.errors.email && formik.touched.email} />

          {/*         <TextField
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
            /> */}

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
        <Particulier
            sx={postProfileStyles.marginBottom}
            person={profileDetail.person}
            />        

            </>)}
      
    </Box>
  );
}
ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;
