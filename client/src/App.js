import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Landing from './pages/Landing'
import Nav from "./components/Nav/index";
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Developers from './pages/Developers'
import Products from './pages/Products'
import Footer from './components/Footer';
// import GridList from './components/GridList';



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Landing}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route path='/developers' component={Developers}/>
            <Route path='/products' component={Products}/>
          </Switch>
          {/* <GridList /> */}
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;