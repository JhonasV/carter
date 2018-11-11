import * as mongoose from "mongoose";
import cinemaController from "../../controllers/CinemasController";

export class CinemaRoutes{
   
    public controller:cinemaController = new cinemaController()
    public routes(app) {
        app.route('/api/v1/cinema')
        .get(this.controller.cinemas)
        .post(this.controller.createCinema)

        app.route('/api/v1/cinema/:cinemaId')
        .get(this.controller.cinema)
        .put(this.controller.updateCinema)
        .delete(this.controller.deleteCinema)
    }
}