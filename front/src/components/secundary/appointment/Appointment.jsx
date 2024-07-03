import { useEffect } from "react";
import styles from "./Appointment.module.css";
import { useNavigate } from "react-router-dom";
import { cancelAppointment as cancel, getUserId } from "../../../helpers";
import { useDispatch} from "react-redux";
import {  updateAppointments } from "../../../redux/slices";

export default function Appointment(appointment) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCancel = () => {
        console.log("entro en cancel")
        console.log("id", appointment.id)
        cancel(appointment.id)
        .then((res) => {
            getUserId(res.appointment.user.id).then((res) =>{
                dispatch(updateAppointments(res.apppointments))
            })
            navigate("/appointments")
        }).catch(error => console.error(error))
    };

    
    useEffect(() => {
        return () => {
            // Cleanup function if needed
        };
    }, [navigate, appointment.id]);

    return (
        <div className={styles.cardscontainer}>
            <div className={`${styles.card} ${appointment.status !== "ACTIVE" ? styles.cancelled : ""}`}>
                <div className={styles.cardcontent}>
                    <h2>{appointment.date} | {appointment.time}</h2>
                    <p className={styles.description}>{appointment.description}</p>
                    <h4 className={styles.status}>{appointment.status}</h4>
                    
                </div>
                <div className={styles.cardbuttons}>
                    {appointment.status === "ACTIVE" && ( // Render cancel button if appointment is not cancelled
                        <button className={`${styles.cancel} cancel`} onClick={handleCancel}>CANCEL</button>
                    )}
                </div>
            </div>
            {/* Repeat for other appointment cards */}
        </div>
    );
}
