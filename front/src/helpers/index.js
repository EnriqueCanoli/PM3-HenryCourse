import axios from "axios"

export async function getAppointments() {
    /**const response = await fetch("http://localhost:3000/appointments/");
    return response.json();*/
    const response = await axios.get("http://localhost:3000/appointments/")
    return response.data;

}

export async function getAppointment(id) {
    const response = await axios.get(`http://localhost:3000/appointments/${id}`)
    return response.data;

}

export async function postAppointment(appointment,id) {
    //const id = localStorage.getItem("userId")
    //console.log("id de locastorage", id)
    const response = await axios.post("http://localhost:3000/appointments/schedule",{...appointment,userId:id});
    return response.data;
}


export async function cancelAppointment(id) {
    const response = await axios.patch(`http://localhost:3000/appointments/cancel/${id}`)
    return response.data;
}

export async function postUserRegister(user) {
    const response = await axios.post("http://localhost:3000/users/register", user)
    return response.data;
}

export async function postUserLogin(user) {
    const response = await axios.post("http://localhost:3000/users/login", user)
    return response.data;
}

export async function getUser() {
    const response = await axios.get("http://localhost:3000/users")
    return response.data;
}


export async function getUserId(id) {
    const response = await axios.get(`http://localhost:3000/users/${id}`)
    return response.data;
}


