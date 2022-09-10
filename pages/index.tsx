import Head from "next/head";
import { Provider } from "mobx-react";
import { LoginView } from "../app/login/view/Login.view";
import { LoginController } from "../app/login/controller/login.controller";
const loginController = new LoginController();
const Home = () => {
  return (
    <div>
      <Head>
        <title>MVVM w/ MobX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginView />
      </main>
    </div>
  );
};

export default Home;
