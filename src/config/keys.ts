import dev from "./dev";

class Key {
  constructor() {}

  public GetKeys() {
    let environment = process.env.NODE_ENV;

    if (environment === "production") {
      return;
    } else {
      return dev;
    }
  }
}

export default Key;
