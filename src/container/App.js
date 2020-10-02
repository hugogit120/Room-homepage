import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import DogList from "../component/DogList/DogList";
// import Navbar from "../component/NavBar/Navbar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Body from "../components/Body";
import image1 from "../images/image-about-dark.jpg";
import image2 from "../images/image-about-light.jpg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Body />
        <div className="footer-container">
          <div className="footer-image footer-image1">
            <img src={image1} />
          </div>
          <div className="footer-text-container">
            <div className="footer-text">
              <h2>ABOUT OUR FURNITURE</h2>
              <p>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
          </div>
          <div className="footer-image2 footer-image">
            <img src={image2} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
// <AuthProvider>
//   <Switch>
//     <Route exact path="/login" component={Login} />
//     <Route exact path="/signup" component={Signup} />
//     <Route path="/" exact component={Home} />
//     <Route component={ErrorPage} />
//   </Switch>
// </AuthProvider>
