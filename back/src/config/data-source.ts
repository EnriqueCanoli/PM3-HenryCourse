import { DataSource } from "typeorm";
import {
    DB_HOST,
    DB_NAME,
    DB_PASS,
    DB_PORT,
    DB_USER
} from "./"

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  "localhost",
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    //dropSchema:true, //reinicializar la bd
    logging: true,
    entities: ["src/entities/*.ts"],//"src/entities/*.ts" User, Appointment, Credential
    subscribers: [],
    migrations: [],
})