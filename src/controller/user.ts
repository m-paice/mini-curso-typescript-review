import { Request, Response } from "express";

import User from "../model/user";

class UserContoller {
  async index(req: Request, res: Response): Promise<Response> {
    const data = User.map(user => user);

    return res.json(data);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { name, username } = req.body;

    User.push({
      id: Math.floor(Math.random() * 9999).toString(),
      name,
      username
    });

    const data = User.map(user => user);

    return res.json(data);
  }
}

export default new UserContoller();
