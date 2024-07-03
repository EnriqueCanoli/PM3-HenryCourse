import { Request, Response, NextFunction } from "express";
import { AppointmentDto } from "../types/appointment";
import { UserDto } from "../types/user";
import { AppDataSource } from "../config";
import { Credential } from "../entities/Credential";
import { credentialDto } from "../types/credential";
import { User } from "../entities/User";

export async function checkAppointmentDto(req: Request, res: Response, next: NextFunction) {
    try {
        const { userId, date, time, description }: AppointmentDto = req.body;
        const appointment: { [key: string]: string | number | Date } = {
            userId: Number(userId),
            date,
            time,
            description
        };

        const missing: string[] = [];
        for (const key in appointment) {
            if (appointment[key] === undefined)
                missing.push(key);
        }
        if (missing.length > 0)
            throw new Error(`message: { Missing data: ${missing.join(", ")}}`)
        next(); // Move next inside the try block
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export async function checkUserDto(req: Request, res: Response, next: NextFunction) {
    try{
        const {name,email,birthdate,dni_number,username,password}: UserDto = req.body;
        const user:{[key:string]: string | number | Date} = {
            name,
            email,
            birthdate,
            dni_number,
            username,
            password
        };
        const missing: string[] = [];
        for (const key in user) {
            if (user[key] === undefined)
                missing.push(key);
        }
        if (missing.length > 0)
            throw new Error(`message: { Missing data: ${missing.join(", ")}}`)
        
        //validar si el usuario existe
        const userExist= await AppDataSource.getRepository(Credential).findOneBy({username});

        if(userExist) throw new Error(`message:  EL usuario existe`);

        //validar correo
        const emailExist= await AppDataSource.getRepository(User).findOneBy({email});

        if(emailExist) throw new Error(`El email existe`);

        //dni existe

        const dniExist= await AppDataSource.getRepository(User).findOneBy({dni_number});

        if(dniExist) throw new Error(`El Dni existe`);

        next();
    }catch (error: any) {
        res.status(400).json({ message: error.message })
    }
    
}

export async function checkLoginUserDto(req: Request, res: Response, next: NextFunction) {
    try{
        const {username,password}: credentialDto = req.body;
        const user:{[key:string]: string | number | Date} = {
            username,
            password
        };

        const missing: string[] = [];
        for (const key in user) {
            if (user[key] === undefined)
                missing.push(key);
        }

        if (missing.length > 0)
            throw new Error(`message: { Missing data: ${missing.join(", ")}}`)
        
        //validar si el usuario existe
        const userExist= await AppDataSource.getRepository(Credential).findOneBy({username});

        if(!userExist) throw new Error(`message:  EL usuario no existe`);

        next();
    }catch (error: any) {
        res.status(400).json({ message: error.message })
    }
    
}
