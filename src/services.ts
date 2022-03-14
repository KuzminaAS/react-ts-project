import Store from "./store";
import API from "./api";
import * as modules from "./store/export";

class Services {
  //@ts-ignore
  public store: Store
  //@ts-ignore
  public api: API

  getStore() {
    if (!this.store) {
      this.store = new Store(this, modules);
    }
    return this.store;
  }


  getApi() {
    if (!this.api) {
      this.api = new API(this);
    }
    return this.api;
  }

}

export default Services;
