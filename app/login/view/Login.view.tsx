import { inject, observer } from "mobx-react";
import react from "react";
import { LoginController } from "../controller/login.controller";

interface State {
  userName: string;
}

type Props = {
  loginController?: LoginController;
};

@inject("loginController")
@observer
export class LoginView extends react.Component<Props> {
  render() {
    const { loginController } = this.props;
    const buttonHandler = (event: any) => {
      event.preventDefault();
      if (loginController) loginController.increase();
    };
    if (loginController) {
      return (
        <div>
          {loginController.getValue}
          <div
            onClick={buttonHandler}
            className="hover:text-green-600 text-red-600"
          >
            hello
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
