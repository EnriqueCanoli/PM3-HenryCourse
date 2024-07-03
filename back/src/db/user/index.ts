import { IUser } from "../../types/user";

export const users: IUser[] = [
    {
     id: 1,
     name: "John Dpe",
     email: "john@gamil.com" ,
     birthdate: new Date("1990-01-01"),
     dni_number: 12345678,
     appointments:[],
     credentialsId : 1
    },
    {
        id: 2,
        name: "Juan perez",
        email: "juan@gamil.com" ,
        birthdate: new Date("1990-06-01"),
        dni_number: 11234569,
        appointments:[],
        credentialsId : 2
       },
    
]

