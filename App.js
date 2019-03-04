import React, { Component } from 'react';
import Home from './components/Home';
import Users from './components/users';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Cities from './components/cities';
import Login from './components/login';
import Signup from './components/signup';
import Itineraries from './components/Itnerary';


 import { Provider } from 'react-redux';
 import store from './store';







class App extends Component {
  
  render() {
    // console.log(store)
    return (
      <Provider store = {store} > 
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path ='/signup' component={Signup} />
          <Route path ='/login' component={Login} />
          <Route path ='/cities' component={Cities} />
          <Route path ='/home' component={Home} />
          <Route path ='/users' component={Users} />
          <Route path ='/itinerary/:name' component={Itineraries} />
      
        </div>
     </BrowserRouter> 
     </Provider>
    );
  }
}

export default App;
