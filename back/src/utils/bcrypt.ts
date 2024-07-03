import bcrypt from 'bcrypt';

function encryptPasword(password:string):string {
    return bcrypt.hashSync(password,10);
}
 //esta es para el login, compara la bs con el pass enviada en el login
function comparePassword(password:string, hash:string):boolean{
    return bcrypt.compareSync(password,hash);
}

export {encryptPasword,comparePassword}