import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todos = await service.getAll();

        return res.send({
            data: todos,
            message: ""
        })
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.store();

        return res.send({
            data: todo,
            message: "todo created"
        })
    }

    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.getOne();

        return res.send({
            data: todo,
            message: ""
        })
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.update();

        return res.send({
            data: todo,
            message: "Todo updated"
        })
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.delete();

        return res.send({
            data: todo,
            message: "Todo deleted"
        })
    }
}

export default new TodoController();