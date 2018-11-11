import * as mongoose from "mongoose";
import actorController from "../../controllers/ActorController";

export class ActorRoutes{
   
    public controller:actorController = new actorController()
    public routes(app) {
        app.route('/api/v1/actor')
        .get(this.controller.actors)
        .post(this.controller.CreateActor)

        app.route('/api/v1/actor/:actorId')
        .get(this.controller.actor)
        .put(this.controller.UpdateActor)
        .delete(this.controller.DeleteActor)
    }
}