import React, { Component } from "react";
import "./Body.css";
import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";
import mobile1 from "../images/mobile-image-hero-1.jpg";
import mobile2 from "../images/mobile-image-hero-2.jpg";
import mobile3 from "../images/mobile-image-hero-3.jpg";
import logo from "../images/logo.svg";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      information: [
        {
          image: image1,
          title: "Discover innovative ways to decorate",
          text: `We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.`,
        },
        {
          image: image2,
          title: "We are available all across the globe",
          text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.`,
        },
        {
          image: image3,
          title: "Manufactured with the best materials",
          text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.`,
        },
      ],
      mobile: [
        {
          image: mobile1,
        },
        {
          image: mobile2,
        },
        {
          image: mobile3,
        },
      ],
      index: 0,
      isToggleOn: false,
    };
  }

  clickForward = () => {
    const limit = this.state.information.length - 1;
    if (this.state.index + 1 > limit) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  clickBackward = () => {
    const limit = 0;
    if (this.state.index - 1 < limit) {
      this.setState({ index: this.state.information.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  handleClick = () => {
    this.setState({ isToggleOn: !this.state.isToggleOn });
    console.log(this.state.isToggleOn);
  };

  render() {
    const { index: i, information, mobile, isToggleOn } = this.state;

    return (
      <div className="info-container">
        <div className="image-div">
          <nav className="nav">
            <div id="mainListDiv" className="main_list">
              <div className="logoAndHamburguer">
                <div id="logoDiv">
                  <img src={logo} />
                </div>

                {window.innerWidth < 815 ? (
                  <div id="hamOrCrossDiv">
                    <button
                      onClick={this.handleClick}
                      className="hamburguer"
                    ></button>
                  </div>
                ) : null}
              </div>

              {isToggleOn ? (
                <div>
                  <ul className="navlinks-mobile">
                    <li>
                      <button onClick={this.handleClick} className="cross" />
                    </li>

                    <li>
                      <a href="#">home</a>
                    </li>
                    <li>
                      <a href="#">shop</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">contact</a>
                    </li>
                  </ul>
                </div>
              ) : null}
              <ul className="navlinks">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <img
            className="image"
            src={
              window.innerWidth > 815 ? information[i].image : mobile[i].image
            }
          />
        </div>
        <div className="text-container">
          <div className="text-box">
            <dl>
              <dt>{information[i].title}</dt>
              <dd>{information[i].text}</dd>
            </dl>
            {/* <h1>{information[i].title}</h1>
            <p>{information[i].text}</p> */}
            <div className="shop-now" style={{ marginTop: "50px" }}>
              <a href="">SHOP NOW</a>
              <span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    fill="#000"
                    fill-rule="nonzero"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="buttoms">
          <button className="arrow-button" onClick={this.clickForward}>
            {" "}
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>{" "}
          </button>
          <button className="arrow-button" onClick={this.clickBackward}>
            {" "}
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Body;
