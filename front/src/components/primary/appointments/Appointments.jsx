//import { useEffect, useState } from "react";
import { Appointment } from "../../secundary";
//import { appointments as apps } from "../../../db";
//import { getAppointments } from "../../../helpers";
import { useSelector } from "react-redux";

export default function Appointments() {
    //const [appointments, setAppointments] = useState([]);
    const appointments = useSelector((state) => state.appointments) 
    console.log(appointments)

    /**
     * esta funcion es la que se encarga de dispararse cuando el componente se levanta
     *//*
    useEffect(() => {
        getAppointments()
            .then(res => setAppointments(res) )
            .catch(error => console.error(error))

    }, [])*/


    /*useEffect(() => {
        //se dispara cuando el componente se desmonte, cuando se vaya a una ruta diferente
        return () => console.log("desmontar")

    }, [])*/

    return (
        <div>
            {/**<button onClick={getAppointments}>Llena appointment</button> */}
            {appointments.length > 0 ? (appointments.map(function (appointment) {
                return (<Appointment key={appointment.id}
                    id={appointment.id}
                    date={appointment.date}
                    time={appointment.time}
                    description={appointment.description}
                    status={appointment.Status}
                />
                );
            })) : <h4>No hay appointments</h4>
            }
        </div>
    )
}


