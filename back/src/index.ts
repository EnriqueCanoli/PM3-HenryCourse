//permite leer los decorators
import "reflect-metadata"
//conecntar la base de datos
import { AppDataSource } from "./config"
import { serverInitializer } from "./server"

//levantar el servidor

AppDataSource.initialize().then(()=>{
    console.log("Database connected")
    serverInitializer();
}).catch((error)=>{
    console.log(error)
})