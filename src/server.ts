import app from "./app";

//app.set('PORT', process.env.PORT  || 3000);
export default class Server {
  private Port: Number;
  private application = app;
  constructor() {
    this.Port = Number(process.env.PORT) || 3000;
    this.Initializing(this.Port);
  }
  Initializing(Port: Number) {
    this.application.listen(this.Port, () =>
      console.log(`Server listening on port ${this.Port}`)
    );
  }
}

let server = new Server();
