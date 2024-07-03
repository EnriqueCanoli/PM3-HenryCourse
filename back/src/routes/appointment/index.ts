import { Router , Request, Response} from "express"
import { cancelAppointmentController, getAllAppointmentsController, getAppointmentByIdController, scheduleAppotintmentController } from "../../controllers/appointment"
import { checkAppointmentDto }from "../../middlewares"

const routerAppointment:Router = Router()

routerAppointment.get("/", getAllAppointmentsController)

routerAppointment.get("/:id", getAppointmentByIdController)

routerAppointment.post("/schedule",checkAppointmentDto, scheduleAppotintmentController)

routerAppointment.patch("/cancel/:id", cancelAppointmentController)

export default routerAppointment;