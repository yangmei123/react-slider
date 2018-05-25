import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

class Navigat extends Component{
  static proptypes = {
    imgData: PropTypes.array,
    activeIndex: PropTypes.number
  }
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
  onItemChange(e) {
    this.props.handleItemChange(e);
  }

  render() {
    const { state: { imgData, activeIndex }} = this;
    const spanNode = imgData.map((slider, index) => <span key={index} className={ index === activeIndex ? 'active':''} onClick={this.onItemChange.bind(this, {slider, activeIndex: index})} ></span>);
    return (
      <div className="navigat">{ spanNode }</div>
    )
  }
}

export default Navigat;
