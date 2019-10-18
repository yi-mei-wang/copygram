import { observable, decorate } from "mobx";

class CopygramStore {
  currentUser = null;
}

decorate(CopygramStore, {
  currentUser: observable
});

const copygramStore = new CopygramStore();

export default copygramStore;
