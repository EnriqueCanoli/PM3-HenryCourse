import { Request, Response } from "express";
import {  cancelAppointment, getAllAppointments, getAppointmentById, scheduleAppointment } from "../../services/appointment";

async function getAllAppointmentsController(req: Request, res: Response) {
    try {
        const appointments = await getAllAppointments();
        res.status(200).json(appointments);
    } catch (error:any) {
        res.status(404).json({ message: error.message })
    }
}

async function getAppointmentByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentById(Number(id));
        if(appointment) res.status(200).json(appointment);
        else res.status(404).json({ message: "Appointment not found" });
    } catch (error:any) {
        res.status(404).json({ message: error.message })
    }
    
    
}

async function scheduleAppotintmentController(req: Request, res: Response) {
    try {
        const appointment = req.body;
        const data = await scheduleAppointment(appointment);
        res.status(201).json({ message: "Schduel appointment", data })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
    
}

async function cancelAppointmentController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const appointment = await cancelAppointment(Number(id));
        res.status(200).json({ message: "Appointment has been canceled", appointment})
    } catch (error:any) {
        res.status(404).json({ message: error.message })
    }
}

export {
    getAllAppointmentsController,
    getAppointmentByIdController,
    scheduleAppotintmentController,
    cancelAppointmentController
}