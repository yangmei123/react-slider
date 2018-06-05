import React, { Component, cloneElement } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
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
      <div className="slide-box cleafix">
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeave={false}
        transitionAppear={true}
        transitionAppearTimeout={500}>
          {sliderImg}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Slider;
