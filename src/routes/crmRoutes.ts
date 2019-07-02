import { Request, Response } from "express";

export class RouteSample {
  /**
   * routes
   */
  public routes(app): void {
    app
      .route("/movie")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "Get request succesfull!"
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send(req.body ? req.body : { message: "No body post" });
      });

    app
      .route("/movie/:movieId")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: `The GET param is ${req.params.movieId}`
        });
      })
      .put((req: Request, res: Response) => {
        res.status(200).send({
          message: `The PUT param is ${req.param}`
        });
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send({
          message: `The DELETE param is ${req.param}`
        });
      });
  }
}
