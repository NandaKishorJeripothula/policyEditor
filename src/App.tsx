import React from 'react';
//import logo from './logo.svg';
//import { useRoutes, A } from "hookrouter";
import { useRoutes } from "hookrouter";
import routes from "./Routes/Router";
//import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  
  return (
    <>
      {/* <A href="/home">Home Page</A> <br />
    	<A href="/about">About Page</A>
    	<br />
    	<A href="/contact">Contacts Page</A> */}
      {routeResult}
    </>
  );
}

export default App;
