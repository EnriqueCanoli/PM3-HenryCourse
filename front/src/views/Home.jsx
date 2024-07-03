import { useSelector } from "react-redux";
import { Schedule } from "../components/primary";



export default function Home(){
    const userId = useSelector((state) => state.userId)


    return (
        <div>
            <br />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                Bienvenido, Agenda un turno para tus Mascotas 
            </h1>
            {/* ESTE ES CON LOCALSTORAGE localStorage.getItem("userId") ? (<Schedule />) : (<p>Debes de estar logueado para agendar turno</p>)*/}
            {/*ESTE ES CON REDUX*/userId !== 0 ?  (<Schedule />) : 
            (<p style={{ fontSize: '18px', textAlign: 'center',fontWeight: 'bold', color: 'red', padding:'50px' }}>Debes de estar logueado para agendar turno</p>)}
        </div>
    );
}
