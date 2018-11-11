import { Application } from "express";
import passport from 'passport'

class AuthRoutes{
    
    constructor(){}

    AuthMethods(app: Application, pass: passport ){
        app.post('/login', pass.authenticate('local-login', {
            successRedirect:{

            }

        }))

        app.post('/signup',pass.authenticate('local-signup', {
            
        }))
    }
}