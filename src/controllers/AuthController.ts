import { User } from "../models/User";
import { Request, Response, NextFunction } from "express";
const user = new User();
class AuthController {
  public Login(req: Request, res: Response, next: NextFunction) {
    let { username, password } = req.body;
  }
}
