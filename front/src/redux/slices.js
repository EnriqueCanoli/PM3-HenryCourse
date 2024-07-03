import { createSlice } from "@reduxjs/toolkit";
import { cancelAppointment as cancel } from "../helpers";


const initialState = {
    userId: 0,
    appointments: []
};

const carWashSlice = createSlice({
    name:"car_wash",
    initialState,
    //Estas son las acciones
    reducers:{
        //por medio dispatch()se eejecuta userId(1), y toma el estado actual y la accion
        //que es actualizar el id, con el action.payload que contiene la informacion 
        setUserId(state, action){
            state.userId = action.payload;
        },
        //actualizar los appointments
        updateAppointments(state,action){
            //los appointmens los vas a sobreescribir con lo que te esta llegando
            state.appointments = action.payload;
        },
        cancelAppointment(state,action){
            //cancel(action.payload);
            state.appointments = state.appointments;
        },
        userLogout(state){
            state.userId = 0
            state.appointments = []
        }

    },
});


export const {setUserId, updateAppointments, cancelAppointment, userLogout} = carWashSlice.actions;

export default carWashSlice.reducer;
/*ingresa a la app -> Home -> validar si el usuario esta loggeado(useSelect) ? from de create appointmenet : 
usuario: mensaje que debe logguearse + redireccion*/

