import { CinemaRoutes } from "./v1/CinemaRoutes";
import { ActorRoutes } from "./v1/ActorsRoutes";
import { RouteSample } from "./crmRoutes";
export class Routes {
  private Cinema: CinemaRoutes = new CinemaRoutes();
  private Actor: ActorRoutes = new ActorRoutes();
  private CrmRoutes: RouteSample = new RouteSample();
  constructor() {}
  public Routes(app): void {
    this.Cinema.routes(app);
    this.Actor.routes(app);
    this.CrmRoutes.routes(app);
  }
}
