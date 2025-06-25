import { Request, Response } from 'express';

export function getUsers(req: Request, res: Response) {
    res.send([]);
}

export function getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    res.send({ id: userId, name: "John Doe" });
}