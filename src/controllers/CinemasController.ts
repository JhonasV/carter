import { Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";
import { Cinema } from "../models/Cinema";

export default class Cinemas {
  constructor() {}

  async cinemas(req: Request, res: Response, next: NextFunction) {
    let cinemas = await Cinema.find();
    let jsonCinemas = JSON.parse(JSON.stringify(cinemas));
    res.json(jsonCinemas);
    next();
  }

  async cinema(req: Request, res: Response, next: NextFunction) {
    let cinema = await Cinema.findById(req.params.cinemaId);
    console.log(cinema);
    let jsonCinemas = await JSON.parse(JSON.stringify(cinema));
    res.json(jsonCinemas);
    next();
  }

  async createCinema(req: Request, res: Response, next: NextFunction) {
    res.send(await Cinema.create(req.body));
    next();
  }

  async updateCinema(req: Request, res: Response, next: NextFunction) {
    let cinemaUpdated = await Cinema.findOneAndUpdate(
      req.params.cinemaId,
      req.body
    );
    res.json({ isUpdated: cinemaUpdated ? true : false, cinemaUpdated });
    next();
  }

  async deleteCinema(req: Request, res: Response, next: NextFunction) {
    let removedCinema = await Cinema.findByIdAndDelete(req.params.cinemaId);
    res.send({
      message: "cinema Removed",
      isDeleted: removedCinema ? true : false
    });
    next();
  }
}
