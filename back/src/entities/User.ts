import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: "varchar", length:200})
    name:string;
    
    @Column({type: "varchar", length:200, unique:true})
    email:string;

    @Column({type: "date", default: new Date()})
    birthdate: Date;


    @Column({unique:true, type:"int"})
    dni_number:number;

    //decorador 1 a 1
    @OneToOne(() => Credential)
    @JoinColumn({ name: "credentialsId" })
    credentials: Credential | number; 

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    apppointments: Appointment[];

}

//de uno a muchos, en las dos tablas se necesita referencia