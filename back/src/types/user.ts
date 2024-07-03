import { IAppointment } from "./appointment";
import { ICredential } from "./credential";

export interface IUser{
    id?: number;
    name:string;
    email:string;
    birthdate: Date;
    dni_number:number;
    appointments : IAppointment[];//esta propiedad va a ser una estructura de objetos que debe de cumplir con la interfaz de IAppointment
    credentialsId : ICredential["id"];
}

//se usa para transferenica de datos
export class UserDto{
    name:string;
    email:string;
    birthdate: Date;
    dni_number:number;
    username: string;
    password:string
}
