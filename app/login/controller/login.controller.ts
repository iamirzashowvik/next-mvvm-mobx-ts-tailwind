import {
  action,
  computed,
  makeAutoObservable,
  observable,
  runInAction,
} from "mobx";
import { LoginService } from "../service/login.service";

export class LoginController {
  loginService = new LoginService();
  @observable value: number = 12;
  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get getValue() {
    // const value = this.loginService.getValue();
    console.log(this.value);

    return this.value;
  }

  @action
  increase() {
    this.value++;

    // const todo = await this.todoService.createTodo(payload);
    // if (todo) {
    //   runInAction(() => {
    //     this.todoList.push(todo);
    //     this.loading = false;
    //   });
    // }
  }
}
