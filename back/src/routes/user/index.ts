import { Router } from "express"
import { cerateUserController, getAllUsersController, getUserbyIdController, loginUserController } from "../../controllers/user"
import { checkUserDto,checkLoginUserDto } from "../../middlewares"


const routerUser:Router = Router()

routerUser.get("/", getAllUsersController)

routerUser.get("/:id", getUserbyIdController)

routerUser.post("/register",checkUserDto, cerateUserController)

routerUser.post("/login", checkLoginUserDto, loginUserController)

export default routerUser;