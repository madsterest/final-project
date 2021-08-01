import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
