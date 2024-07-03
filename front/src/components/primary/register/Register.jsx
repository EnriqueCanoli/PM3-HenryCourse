/**
 * Este registro se hizo con formik 
 * npm i formik
 */
import { Formik, Field, Form, ErrorMessage } from "formik"
import validate from "./validate"
import styles from "./Resgister.module.css";
import { postUserRegister } from "../../../helpers";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()

    function handleSubmit({ name, email, birthdate, dni, username, password }) {
        const dni_number = dni;
        const user = { name, email, birthdate, dni_number, username, password };
        postUserRegister(user)
            .then(() => {
                alert("user created")
                navigate("/auth/signin")
                }
            )
            .catch(() => alert("Verificar campos"))
    }

    return (
        <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Register</h1>
            <br />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    birthdate: "",
                    dni: "",
                    username: "",
                    password: "",
                    repeatPassword: ""

                }}
                validate={validate}
                onSubmit= {handleSubmit}
            >

                {() => (
                    <Form className={styles.form}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <Field type="text" name="name" className={styles.input} />
                        <ErrorMessage name="name" component="div" className={styles.error} />

                        <label htmlFor="email" className={styles.label}>Email</label>
                        <Field type="email" name="email" className={styles.input} />
                        <ErrorMessage name="email" component="div" className={styles.error} />

                        <label htmlFor="birthdate" className={styles.label}>Birthdate</label>
                        <Field type="date" name="birthdate" className={styles.input} />
                        <ErrorMessage name="birthdate" component="div" className={styles.error} />

                        <label htmlFor="dni" className={styles.label}>DNI</label>
                        <Field type="text" name="dni" className={styles.input} />
                        <ErrorMessage name="dni" component="div" className={styles.error} />

                        <label htmlFor="username" className={styles.label}>Username</label>
                        <Field type="text" name="username" className={styles.input} />
                        <ErrorMessage name="username" component="div" className={styles.error} />

                        <label htmlFor="password" className={styles.label}>Password</label>
                        <Field type="password" name="password" className={styles.input} />
                        <ErrorMessage name="password" component="div" className={styles.error} />

                        <label htmlFor="repeatPassword" className={styles.label}>Repeat Password</label>
                        <Field type="password" name="repeatPassword" className={styles.input} />
                        <ErrorMessage name="repeatPassword" component="div" className={styles.error} />

                        <button type="submit" className={styles.button}>Submit</button>
                    </Form>

                )}

            </Formik>
        </div>


    )
}