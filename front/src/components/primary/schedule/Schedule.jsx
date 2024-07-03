import { useState } from "react";
import validateAppointment from "./validate";
import { postAppointment } from "../../../helpers";
import styles from "./Schedule.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointments } from "../../../redux/slices";


export default function Schedule() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId)
    //aqui se almacenar los inputs
    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
        description: "",
    });

    //aqui se almacenan los errores
    const [errors, setErrors] = useState({
        date: "",
        time: "",
        description: ""
    })

    function handleChange(e) {
        const newAppointment = { ...appointment, [e.target.name]: e.target.value };
        setAppointment(newAppointment);
        const validateErrors = validateAppointment(newAppointment);
        setErrors({ ...validateErrors })
    }

    //esta funcion se encarga de hacer el submit al back
    function handleSumbit(e) {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            postAppointment(appointment, userId).then((res) => {
                //console.log("apointments userid", userId)
                //console.log("apointments ", res.data.time)
                //actualizar appointments ya que se usa reduz
                dispatch(updateAppointments([
                    ...res.data.user.apppointments,
                    {
                        id: res.data.id,
                        time: res.data.time,
                        date: res.data.date,
                        description: res.data.description,
                        Status: 'ACTIVE'
                    }
                ]));
                //los inputs del formulario los regresa a cero
                setAppointment({
                    date: "",
                    time: "",
                    description: "",
                })
                alert("appointment created")
            }).catch(err => console.log(err))

        } else {
            alert("Verificar información")
        }




    }

    return (
        <form className={`${styles.card} ${styles.form}`} onSubmit={handleSumbit}>
            <label className={styles.label}>
                Date:
                <input className={styles.input} type="date" name="date" value={appointment.date} onChange={handleChange} />
                <p className={styles.error}>{errors.date}</p>
            </label>
            <label className={styles.label}>
                Time:
                <input className={styles.input} type="time" name="time" value={appointment.time} onChange={handleChange} />
                <p className={styles.error}>{errors.time}</p>
            </label>
            <label className={styles.label}>
                Description:
                <input className={styles.input} type="text" name="description" value={appointment.description} onChange={handleChange} />
                <p className={styles.error}>{errors.description}</p>
            </label>
            <div className={styles.buttonContainer}>
                <button className={`${styles.button} ${styles.cancelButton}`} type="button">Cancel</button>
                <button className={`${styles.button} ${styles.submitButton}`} type="submit">Create Appointment</button>
            </div>
        </form>

    )
}