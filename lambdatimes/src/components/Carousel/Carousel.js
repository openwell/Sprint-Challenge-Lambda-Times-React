import React, { Component } from "react";
import { carouselData } from "../../data";
import "../../CSS/index.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: carouselData,
      index: 0
    };
  }
  componentDidMount() {
    // this.setState({ data: carouselData, index: 0});
  }

  leftClick = () => {
    this.setState(state => ({
      index: state.index <= 0 ? state.data.length - 1 : (state.index -= 1)
    }));
  };

  rightClick = () => {
    this.setState(state => ({
      index: state.index >= state.data.length - 1 ? 0 : (state.index += 1)
    }));
  };

  // selectedImage = () => {
  //   let img1 = this.state.data[this.state.index];
  //   let selectedImage = <img src={img1} style={{ display: "block" }} alt="" />;
  // };
  // random = () => Math.random();
  render() {
    let page = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
    };
    let selectedImage = (
      <img
        src={this.state.data[this.state.index]}
        style={{ display: "block" }}
        alt=""
      />
    );
    return (
      <TransitionGroup className="carousel">
        <CSSTransition key={this.state.index} classNames="fade" timeout={500}>
          <div style={page}>
            <div className="left-button" onClick={this.leftClick}>
              {"<"}
            </div>
            {selectedImage}
            <div className="right-button" onClick={this.rightClick}>
              {">"}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
