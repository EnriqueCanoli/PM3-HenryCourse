import styles from "./Profile.module.css";

export default function Profile(user) {
    return (
        <div className={styles.card}>
            <div className={styles.profileHeader}>
                <img src="../../../../src/assets/photo.jpg" alt="profile_photo" className={styles.profileImage} />
                <p>{user.name}</p>
            </div>
            <div className={styles.profileInfo}>
                
                <div className={styles.field}>
                    <p>Email:</p>
                    <p>{user.email}</p>
                </div>
                <div className={styles.field}>
                    <p>DNI:</p>
                    <p>{user.dni_number}</p>
                </div>
                <div className={styles.field}>
                    <p>Birthdate:</p>
                    <p>{user.birthdate}</p>
                </div>
            </div>
        </div>
    );
}
