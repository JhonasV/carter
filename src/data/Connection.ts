import * as mongoose from "mongoose";

import dev from '../config/dev';
import Key from '../config/keys';


export default class Connection{

    private key: Key = new Key();
    constructor(){}

    public connection() {
        let keys = this.key.GetKeys();
        
        mongoose.connect(keys.mongoURI,{useNewUrlParser: true}, ()=>{
            console.log('MongoDB Connected');
        })
        
    }
}


