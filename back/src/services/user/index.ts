import { AppDataSource } from "../../config";
import { users } from "../../db";
import { User } from "../../entities/User";
import { ICredential, credentialDto } from "../../types/credential";
import { IUser, UserDto } from "../../types/user";
import { checkCredential, generateCredential } from "../credential"

async function getAllUsers(): Promise<User[]> {
    try {
        //const users = await AppDataSource.manager.find(User);
        //return users;
        const users = await AppDataSource.getRepository(User).find({
            relations: ["credentials", "apppointments"]
        })
        return users;
    } catch (error: any) {
        throw new Error(error)
    }
}

async function getUserById(id: number): Promise<User | null> {
    try {
        // const user = await AppDataSource.manager.findOneBy(User,{id})
        const user = await AppDataSource.getRepository(User).findOne({
            where: { id },
            relations: ["apppointments"]
        })
        return user;
    } catch (error: any) {
        throw new Error(error);
    }

}

async function createUser(user: UserDto): Promise<User> {
    try {
        const credentialId = await generateCredential({ username: user.username, password: user.password });
        //el metodo create , crea el registro pero no lo guarda, mejor save que si lo hace
        const newUser = await AppDataSource.manager.save(User,{
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            dni_number: user.dni_number,
            credentials: credentialId,

        })
        return newUser;
    } catch (error: any) {
        throw new Error(error);
    }
}

async function loginUser(credentials: credentialDto) {
    try {
        const credendial = await checkCredential(credentials);
        //where: { credentials: Number(credendialId)}
        /*const user = await AppDataSource.getRepository(User).findOne({
            where: { credentials: { id: Number(credendialId) } },
            relations: ['credentials'] // Esto cargará la relación credentials
        });
        */
        const user = await AppDataSource.getRepository(User).findOne({
            where: { credentials: { id: Number(credendial?.id) } },
            relations: ["apppointments"] // Esto cargará la relación credentials
        })
        return user;
    } catch (error: any) {
        throw new Error(error);
    }


}

export {
    getAllUsers,
    getUserById,
    createUser,
    loginUser
}