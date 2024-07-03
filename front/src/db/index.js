//arreglo para representar las reservas, con un unico usuario
export const users =[
    {
        id:1,
        name: "Luis",
        email:"luis@hotmail.com",
        dni_number:12345,
        birthdate:"1990-01-01",
        Credentials:{
            id:1,
            username:"luisco",
            password:"1234"
        }
    },
    {
        id:2,
        name: "pepe",
        email:"pepe@hotmail.com",
        dni_number:987,
        birthdate:"1990-02-01",
        Credentials:{
            id:2,
            username:"pep2",
            password:"pass"
        }
    },

] 


export const appointments = [
    {   id:1,
        date: "2024-05-06",
        time: "12:00:00",
        description: "Sample description",
        status:"ACTIVE",
        user:{
            id:1,
            name: "Luis",
            email:"luis@hotmail.com",
            dni_number:12345,
            birthdate:"1990-01-01",
        }
    },
    {   id:2,
        date: "2024-05-07",
        time: "13:00:00",
        description: "Sample description 2",
        status:"ACTIVE",
        user:{
            id:1,
            name: "Luis",
            email:"luis@hotmail.com",
            dni_number:12345,
            birthdate:"1990-01-01",
        },
        
    },
    {   id:3,
        date: "2024-05-08",
        time: "14:00:00",
        description: "Sample description 3",
        status:"ACTIVE",
        user:{
            id:1,
            name: "Luis",
            email:"luis@hotmail.com",
            dni_number:12345,
            birthdate:"1990-01-01",
        },
    }
]