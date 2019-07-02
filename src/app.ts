import * as express from "express";
import { Routes } from "./routes/Routes";
import * as morgan from "morgan";
import passport = require("passport");
import cookieParser = require("cookie-parser");
import session = require("express-session");
import cors = require("cors");
// import Key from "./config/keys";
import Connection from "./data/Connection";
import PassportConfig from "./config/passport";

class App {
  public app: express.Application;
  public route: Routes = new Routes();
  public connect: Connection = new Connection();
  // public key: Key = new Key();
  public passportConfig: PassportConfig = new PassportConfig();
  constructor() {
    this.app = express();
    this.connect.connection();
    this.config();
    this.route.Routes(this.app);
    this.passportConfig.passportConfig(passport);
  }

  private config(): void {
    // let keys = this.key.GetKeys();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
    this.app.use(cookieParser());
    // this.app.use(
    //   session({
    //     secret: keys.secret,
    //     resave: false,
    //     saveUnitialized: false
    //   })
    // );
    // this.app.use(passport.initialize());
    // this.app.use(passport.session());
  }
}
export default new App().app;
