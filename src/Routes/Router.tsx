import React from "react";
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Interactions from "../Components/Interactions";
import Trello from "../Components/Trello";
import TrelloFnc from "../Components/TrelloFnc";
import Trellots from "../Components/Trellots";
import Appolo from "../Components/Appolo";
import Appoloboost from "../Components/Appoloboost";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";

const routes = {
  "/": () => <Interactions />,
  "/home": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/trello": () => <Trello />,
  "/trello2": () => <TrelloFnc />,
  "/trello3": () => <Trellots />,
  "/appolo": () => <Appolo />,
  "/appolo-boost": () => <Appoloboost />,
  "/signup": () => <Signup />,
  "/login": () => <Signin />,
};

export default routes;
