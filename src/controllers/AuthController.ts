import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashedPassword: string = await Authentication.passwordHash(password);

        await db.user.create({ username, password: hashedPassword });

        return res.send("Registrasi sukses !!");
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        // cari data user by username
        let { username, password } = req.body;

        const user = await db.user.findOne({
            where: { username }
        });

        // cek password
        let compare = await Authentication.passwordCompare(password, user.password);

        // generate token
        if (compare) {
            let token = Authentication.generateToken(user.id, username, user.password);
            return res.send({
                token
            });
        }

        return res.send("auth failed");
    }
}

export default new AuthController();