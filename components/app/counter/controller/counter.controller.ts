import { action, computed, makeAutoObservable, observable } from "mobx";
import { CounterService } from "../service/counter.service";

export class CounterController {
  counterService = new CounterService();
  @observable value: number = 1;
  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get getValue() {
    // const value = this.counterService.getValue(); //if you want to access the service class
    console.log(this.value);
    return this.value;
  }

  @action
  increase() {
    this.value++;
  }
}
