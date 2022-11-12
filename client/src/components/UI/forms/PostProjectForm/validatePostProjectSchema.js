// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
  .string("string")
  .required("Ce champ est requis !"),
  title: yup
    .string("string")
    .required("Ce champ est requis !"),
  category: yup
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
  website: yup
    .string()
    .url()
});