import { observable, decorate } from "mobx";

class LoadingStore {
  // @observable currentUser = null
  isLoading = true;

  setLoading(bool) {
    this.isLoading = bool;
  }
}

decorate(LoadingStore, {
  isLoading: observable
});

const loadingStore = new LoadingStore();

export default loadingStore;
