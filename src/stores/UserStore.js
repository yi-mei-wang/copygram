import { observable, decorate } from "mobx";

class CopygramStore {
  // @observable currentUser = null
  currentUser = null;
  isLoading = true;

  changeCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(CopygramStore, {
  currentUser: observable
});

const copygramStore = new CopygramStore();

export default copygramStore;
