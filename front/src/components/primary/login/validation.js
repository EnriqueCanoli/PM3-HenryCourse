import * as Yup from "yup";

/**
 * nos va a devolver un objeto con los errores
 * y vamos evaluar cada propiedad
 */
const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string()
    .min(2, "Too short")
    .max(50, "Too Long")
    .required("Required")
})

export default LoginSchema;