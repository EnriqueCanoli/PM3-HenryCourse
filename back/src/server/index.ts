import { PORT } from "../config"
import server from "./server"

export async function serverInitializer(){
    server.listen(PORT, ()=>{
        console.log(`Servidor escuchando en http://localhost:${PORT}`)
    
    })
}


