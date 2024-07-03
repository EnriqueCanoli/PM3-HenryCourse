import { IUser } from "./user";

export enum Status {
    ACTIVE = 'ACTIVE',
    CANCELED = 'CANCELED'
}
export interface IAppointment{
    id?:number;
    date:string;
    time:string;
    description: string;
    status: Status;
    userId:IUser["id"];
}

export interface AppointmentDto{
    date:string;
    time:string;
    description: string;
    status: Status;
    userId:number;
}