// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  gender: yup
    .boolean()
    .required()
    .oneOf([0 , 1], 'Sélectionez un type de financement'),
  pseudo: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(4, "moins de 4 caractères")
    .max(100, "plus de 100 caractères"),
  last_name: yup
    .string("string")
    .required("Ce champ est requis !"),
  first_name: yup
    .string("string")
    .required("Ce champ est requis !"),
  email: yup
    .string("string")
    .email("Email non valide")
    .required("Ce champ est requis !"),
  password: yup
    .string("string")
    .required("Ce champ est requis !")
    .min('4', "Le mot de passe doit comporter plus de 4 caractères")
    .max(120, "Le mot de passe doit comporter moins de 120 caractères"),
  confirmPassword: yup
    .string("string")
    .oneOf([yup.ref("password")], "Le mot de passe ne correspond pas")
    .required("Confirmer votre mot de passe"),
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
    .required("Ce champ est requis !")
    .min(5, "moins de 5 caractères")
    .max(5, "plus de 5 caractères"),
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
