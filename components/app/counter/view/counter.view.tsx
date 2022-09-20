import { inject, observer } from "mobx-react";
  import react from "react";
  import { CounterController } from "../controller/counter.controller";
  
  interface State {
    userName: string;
  }
  
  type Props = {
    counterController?: CounterController;
  };
  
  @inject("counterController")
  @observer
  export class CounterView extends react.Component<Props> {
    render() {
      const { counterController } = this.props;
      const buttonHandler = (event: any) => {
        event.preventDefault();
        if (counterController) counterController.increase();
      };
      if (counterController) {
        return (
          <div className="flex h-screen" >
           <div className="m-auto">
           <p className="text-9xl">{counterController.getValue}</p>

            <div
              onClick={buttonHandler}
              className="mt-10 text-center text-blac bg-cyan-500"
            >
              Counter+
            </div>
           </div>
          </div>
        );
      }
      return <div>Loading...</div>;
    }
  }
  
  