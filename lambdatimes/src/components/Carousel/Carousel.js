import React, { Component } from "react";
import { carouselData } from "../../data";
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

  selectedImage = () => {
    let img1 = this.state.data[this.state.index];
    return <img src={img1} style={{ display: "block" }} alt="" />;
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
