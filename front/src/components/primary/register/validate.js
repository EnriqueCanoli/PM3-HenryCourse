export default function validate(values){
    const errors = {};
    if(!values.name) errors.name = "Required"
    if(!values.email) errors.email = "Required"
    else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) errors.email = "Invalid email address"
    if(!values.birthdate) errors.birthdate = "Required";
    if(new Date(values.birthdate) > new Date()) errors.birthdate = "Birthdate must be before the currente date"
    if(!values.dni) errors.dni = "Required"
    if(!values.username) errors.username = "Required"
    if(!values.password)errors.password = "Required"
    if(values.password !== values.repeatPassword) errors.repeatPassword = "Passwords dont match"

    return errors;

}