import { observable, decorate } from "mobx";

class LoadingStore {
  // @observable currentUser = null
  isLoading = true;

  setIsLoading() {
    this.isLoading = !this.isLoading;
  }

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  // }
}

decorate(LoadingStore, {
  isLoading: observable
});

export default LoadingStore;
