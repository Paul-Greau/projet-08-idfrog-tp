// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string("string")
    .email("Email non valide")
    .required("Ce champ est requis !"),
  password: yup
    .string("string")
    .required("Ce champ est requis !")
    .min('4', "Le mot de passe doit comporter plus de 4 caractères")
    .max(120, "Le mot de passe doit comporter moins de 120 caractères"),

});