
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SlideImage from './components/single';
import Container from './components/Container';
 
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Categories from './components/Category';
import { createStore,applyMiddleware } from 'redux';
import reducer from './reducers';
import View from './routes/view';




const store=createStore(reducer);




class Home extends React.Component{
  render(){
    return(
      <section id="home">
       <SlideImage/>
       <Container/>
       <Categories/>
      </section>
      
    )
  }
}
class Contact extends React.Component{
  render(){
    return(
      <section id="contact">
        <h2 className="p-2">Contact us</h2>
        <hr/> 
      </section>
    )
  }
}

function App(props) {
  
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      
       <Header/>  
       <Nav/>
       <Login/>
       <Cart/>

       
      
      <Switch >
        <Route exact path="/">
        <Home/>
        </Route>
       
        <Route exact path="/contact">
        <Contact/>
        </Route>

        <Route exact path="/view/:id" component={View}>
          
        </Route>
      </Switch>
      


      <Footer/>
      
       </div>
       </Router>
       </Provider>
  );
}
export default App;