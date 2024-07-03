import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'credentials'})
export class Credential{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true, type:"varchar", length:50})
    username: string;

    @Column({type:"text", select:false}) //select:false , por defecto no mande la password
    password: string;
}

//las relaciones
/**si es una relacion 1 a 1 , solo necesitas agregarlo en una tabla */