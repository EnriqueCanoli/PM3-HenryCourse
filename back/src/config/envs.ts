/**
 * Este archivo facilita la exportacion y que no sea tan pesado
 *  ya que no se necesita importar el dotenv que tiene peso
 * y solo se exportan las variables 
 */
import dotenv from "dotenv"
dotenv.config({path: "./src/config/.env"}) //le decimos donde encontrar el .env

const {PORT, PROTO, HOST } = process.env
const DB_TYPE= process.env.DB_TYPE;
const DB_HOST= process.env.DB_HOST || "localhost";
const DB_PORT= Number(process.env.DB_PORT) ||  5432;
const DB_USER= process.env.DB_USER;
const DB_PASS= process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;


export {
    PORT,
    PROTO,
    HOST,
    DB_HOST,
    DB_NAME,
    DB_PASS,
    DB_PORT,
    DB_TYPE,
    DB_USER
}