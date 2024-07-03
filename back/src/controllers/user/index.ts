import { Request, Response } from "express";
import { createUser, getAllUsers, getUserById, loginUser } from "../../services/user";

async function getAllUsersController(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        res.status(200).json(users)
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }

}

async function getUserbyIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const user = await getUserById(Number(id));
        if (user) res.status(200).json(user);
        else res.status(404).json({ message: "User not found" });
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }

}

async function cerateUserController(req: Request, res: Response) {
    try {
        const user = req.body;
        const newUser = await createUser(user);
        res.status(200).json({ message: "User registered", newUser })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }

}

async function loginUserController(req: Request, res: Response) {
    try {
        const credentials = req.body;
        const user = await loginUser(credentials);
        res.status(200).json({ "login": true, user })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }

}

export {
    getAllUsersController,
    getUserbyIdController,
    cerateUserController,
    loginUserController
}