import { Strategy } from "passport-local";
import { User } from "../models/User";

class Passport {
  constructor() {}

  passportConfig(Passport) {
    Passport.serializeUser((user, done) => {
      done(null, user.id);
    });
    Passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });

    Passport.use(
      "local-signup",
      new Strategy(
        {
          usernameField: "username",
          passwordField: "password",
          passReqToCallback: true
        },
        async (req, email, password, done) => {
          try {
            let user = await User.findOne({ email, password });
            if (user) return done(null, user);
            return done(null, false);
          } catch (error) {
            return done(error);
          }
        }
      )
    );
  }
}
export default Passport;
