// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  title: yup
    .string("string")
    .required("Ce champ est requis !"),
  resume: yup
    .string("string")
    .required("Ce champ est requis !"),
  description: yup
    .string("string")
    .required("Ce champ est requis !"),
  amount_target: yup
    .string("string")
    .required("Ce champ est requis !"),
  invest_type: yup
    .boolean()
    .required()
    .oneOf([0 , 1], 'Sélectionez un type de financement'),
  status: yup
    .boolean()
    .required()
    .oneOf([2 , 3], 'Sélectionez un type de financement'),
  birth_date: yup
    .string("string")
    .required("Ce champ est requis !"),
  birth_place: yup
    .string("string")
    .required("Ce champ est requis !"),
  nationality: yup
    .string("string")
    .required("Ce champ est requis !"),
  city: yup
    .string("string")
    .required("Ce champ est requis !"),
  zip_code: yup
    .string("string")
    .required("Ce champ est requis !"),
  phone_number: yup
    .string("string")
    .required("Ce champ est requis !"),
  adress: yup
    .string("string")
    .required("Ce champ est requis !"),
  website: yup
    .string()
    .url()
});