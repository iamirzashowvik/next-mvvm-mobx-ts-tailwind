import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "mobx-react";
import { LoginController } from "../app/login/controller/login.controller";
import { HomeController } from "../app/home/controller/home.controller";

const loginController = new LoginController();
const homeController = new HomeController();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider loginController={loginController} homeController={homeController}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
