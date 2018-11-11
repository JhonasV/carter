import {Request, Response, NextFunction, json} from 'express';
import {Actor} from '../models/Actor';
export default class ActorController{
    constructor(){}

    async actors(req: Request, res: Response, next: NextFunction){
        try {
            let actors = await Actor.find();
             res.json(JSON.parse(JSON.stringify(actors)));        
        } catch (error) {
            res.json({error});
        } 
        next();
    }

    async actor(req: Request, res: Response, next: NextFunction){
        try {
            let actor = await Actor.findOne();
            actor ? res.status(200).json(JSON.parse(JSON.stringify(actor))) : res.status(404).json({message: 'Actor not found'})
        } catch (error) {
            res.status(500).json({error});
        }
        next();
    }

    async CreateActor(req:Request, res: Response, next: NextFunction){
        try {
            let {name, bio, picture} = req.body;
            let actor = await Actor.create({name, bio, picture});
            let actorStringify = JSON.parse(JSON.stringify(actor));
            actor ? res.json({actorStringify, created:true }) : res.json({created: false});
        } catch (error) {
            res.status(500).json({error});
        }
        next();
    }

    async UpdateActor(req:Request, res:Response, next:NextFunction){
        try {
            let {actorId} = req.params;
            let {name, bio, picture} = req.body;
            let actor = {name, bio, picture};
            let actorUpdated = await Actor.findByIdAndUpdate(actorId,actor);
            actorUpdated = JSON.parse(JSON.stringify(actorUpdated));
            actorUpdated ? res.json({actorUpdated, updated:true}) : res.json({updated:false});
        } catch (error) {
            res.status(500).json(error);
        }
        next();
    }

    async DeleteActor(req:Request, res:Response, next:NextFunction){
        try {
            let {actorId} = req.params;
            await Actor.findByIdAndDelete(actorId);
            res.json({deleted:true});
        } catch (error) {
            res.json(error);
        }
        next();
    }
}