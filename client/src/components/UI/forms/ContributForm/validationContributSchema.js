// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  invest_type: yup
    .boolean()
    .required()
    .oneOf([0 , 1], 'Sélectionez un type de financement'),
  amount_target: yup
    .string("string")
    .required("Ce champ est requis !"),
  card_number: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(16, "moins de 16 caractères"),
  expiry_date: yup
    .string("string")
    .required("Ce champ est requis !"),
  security_code: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(3, "moins de 3 caractères"),

});