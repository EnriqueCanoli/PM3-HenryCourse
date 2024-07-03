/**
 * aqui usamos yup
 * 
 */
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import LoginSchema from "./validation"
import { postUserLogin } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId, updateAppointments } from "../../../redux/slices";

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate(); 

    function handleSubmit({ username, password }) {
        postUserLogin({ username, password })
            .then((res) => {
               // localStorage.setItem("userId", res.user.id);
                dispatch(setUserId(res.user.id)); ///guarda el id
                dispatch(updateAppointments(res.user.apppointments)) //toma los appointments
                navigate(`/`);

            })
            .catch(() => alert("Credenciales incorrectas"))
    }
    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={LoginSchema}

                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className={styles.form}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <Field type="text" name="username" className={styles.input} />
                        <ErrorMessage name="username" component="div" className={styles.error} />

                        <label htmlFor="password" className={styles.label}>Password</label>
                        <Field type="password" name="password" className={styles.input} />
                        <ErrorMessage name="password" component="div" className={styles.error} />

                        <button type="submit" className={styles.button}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
