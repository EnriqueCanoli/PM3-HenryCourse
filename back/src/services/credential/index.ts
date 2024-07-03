import { AppDataSource } from "../../config";
import { credentials } from "../../db/credential";
import { Credential } from "../../entities/Credential";
import { ICredential } from "../../types/credential";
import { encryptPasword, comparePassword } from "../../utils";


async function generateCredential({ username, password }: ICredential): Promise<number | undefined> {
    try {
        const hash: string = encryptPasword(password);
        const cred = await  AppDataSource.manager.getRepository(Credential).save({
            username,
            password: hash,
        })

        return cred.id;
    } catch (error: any) {
        throw new Error(error)
    }


}


//checar las credenciales
async function checkCredential({ username, password }: ICredential): Promise<Partial<Credential> | undefined> {
    try {
        const credential = await AppDataSource.getRepository(Credential).findOne({
            where: {username},
            select: ["id", "password"]
        });
        
        console.log("credentiaaaal.id", credential)
        if (!credential) throw new  Error("user not found");
        const isValid = comparePassword(password, credential.password);
        if(!isValid) throw new  Error("pasword incorrect");
        
        //return credential.id;
        return {id: credential.id, username: credential.username}
    } catch (error: any) {
        throw new Error(error)
    }

}

export { checkCredential, generateCredential }