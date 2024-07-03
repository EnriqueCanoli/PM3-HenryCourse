import { useNavigate } from "react-router-dom";
import styles from "./Detail.module.css"; // Correct the import to Profile.module.css

export default function Detail(appointment) {
    const navigate = useNavigate();
    
    const handleBack = () => {
        setTimeout(()=>{
            navigate(`/appointments`);
        },500)
        
    };

    return (
        <div className={styles.card}> {/* Correct the class name to use styles.card */}
            <div className={styles.profileInfo}>
                <div className={styles.field}>
                    <p>{appointment.date} | {appointment.time}</p>
                    <p></p>
                </div>
                <div className={styles.field}>
                    <p>Description: </p>
                    <p>{appointment.description}</p>
                </div>
                <div className={styles.field}>
                    <p>Status:</p>
                    <p>{appointment.status}</p>
                </div>
                
                <button className={styles.button} onClick={handleBack}>Back</button>
            </div>
        </div>
    );
}
