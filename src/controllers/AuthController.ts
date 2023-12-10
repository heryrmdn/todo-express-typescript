import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    { id: 1, name: "Adi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Cidi" },
    { id: 4, name: "Didi" }
];

class AuthController {
    index(req: Request, res: Response): Response {
        return res.send("");
    }

    create(req: Request, res: Response): Response {
        return res.send("");
    }
}

export default new AuthController();