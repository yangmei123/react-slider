import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {
  static propTypes = {
    imgData: PropTypes.array,
    activeIndex: PropTypes.number,
  };
  constructor(props) {
    super(props);
    const sliderProps = props;
    const { imgData, activeIndex } = sliderProps;
    this.state ={
      imgData,
      activeIndex
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({activeIndex: nextProps.activeIndex});
  }
  render() {
    const { state: { imgData, activeIndex }} = this;
    const sliderImg = imgData.map((slider, index) => {
        return index === activeIndex ? <img src={slider.url} key={index} /> : '';
      }
    );
    return (
      <div className="slide-box cleafix">{sliderImg}</div>
    )
  }
}

export default Slider;
