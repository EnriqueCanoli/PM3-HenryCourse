import { AppDataSource } from "../../config";
import { Appointment } from "../../entities/Appointment"
import { User } from "../../entities/User";
import { AppointmentDto, Status } from "../../types/appointment";

async function getAllAppointments(): Promise<Appointment[]> {
    try {
        //const appointments = await AppDataSource.manager.find(Appointment);
        const appointments = await AppDataSource.manager.find(Appointment, {
            order: { id: "DESC" }, // Order by ID in ascending order
            relations: ["user"]
        });
        return appointments;
    } catch (error: any) {
        throw new Error(error);
    }
}

async function getAppointmentById(id: number): Promise<Appointment | null> {
    try {
        const appointment = await AppDataSource.getRepository(Appointment).findOne({
            where:{id},
            relations:["user"]
        })
        if(!appointment) throw new Error("Appointment not found")
        return appointment;
    } catch (error: any) {
        throw new Error(error);
    }

}

async function scheduleAppointment(appointment: AppointmentDto): Promise<Appointment> {
    try {
      
        const user = await AppDataSource.getRepository(User).findOne({
            where: {id:appointment.userId},
            relations: {apppointments:true}
        })
        
        const app = {
            date: appointment.date,
            time: appointment.time,
            description: appointment.description
        }
        if(!user) throw new Error("User for appointment not found")

        const newAppointment = await AppDataSource.getRepository(Appointment).save({
            ...app,
            user,
        })

        if(!newAppointment) throw new Error("Appointment not created")

        return newAppointment;
    } catch (error: any) {
        throw new Error(error);
    }
}

async function cancelAppointment(id: number): Promise<Appointment | null> {
    try {/*
        // Get the appointment by id
        const appointment = await getAppointmentById(id);
        // Check if appointment exists
        if (!appointment) {
            return null; // Return null if appointment doesn't exist
        }
        // Update appointment status to CANCELED
        appointment.Status = Status.CANCELED;

        // Save the updated appointment
        await AppDataSource.manager.getRepository(Appointment).save(appointment);

        return appointment;*/

        const appointment = await AppDataSource.getRepository(Appointment).findOne({
            where: {id},
            relations: ["user"]
        });
        if(!appointment) throw new Error("Appointment not found")
        const updateApp = await AppDataSource.getRepository(Appointment).save({
            ...appointment,
            Status: Status.CANCELED
        })

        if(!updateApp) throw new Error("Appointment not canclled")
        return updateApp;

    } catch (error: any) {
        throw new Error(error.message);
    }
}
export {
    getAllAppointments,
    getAppointmentById,
    scheduleAppointment,
    cancelAppointment
}