import { Request, Response, NextFunction } from "express";
import * as mongoose from "mongoose";
import { Cinema } from "../models/Cinema";

export default class Cinemas{
   
    constructor(){}
  
    async cinemas(req: Request, res: Response, next: NextFunction){
        let cinemas = await Cinema.find();
            let jsonCinemas = JSON.parse(JSON.stringify(cinemas));
            res.json(jsonCinemas);
        next();
    }

    async cinema(req: Request, res:Response, next:NextFunction){
       let cinema =await Cinema.findOne({id:req.params.cinemaId})
        let jsonCinemas = JSON.parse(JSON.stringify(cinema));
        res.json(jsonCinemas);
        next();
    }

    createCinema(req: Request, res:Response, next: NextFunction){
        res.send(Cinema.create(req.body));
        next();
    }

    updateCinema(req: Request, res:Response, next:NextFunction){
        res.send( Cinema.findOneAndUpdate(req.params.cinemaId, req.body));
        next();
    }

    deleteCinema(req: Request, res: Response, next:NextFunction){
        Cinema.findOneAndRemove({id:req.params.cinemaId});
        res.send({message:'cinema Removed'})
        next();
    }
}