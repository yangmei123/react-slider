/**
 *
 * @authors lml
 * @date    2017-12-29
 * @version $Id$
 */

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Slider from '../components/Slider';
import PrevNext from '../components/PrevNext';
import Navigat from '../components/Navigat';
import style from '../css/style.scss';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


class SliderWrap extends Component { // 用类的方式创建组件
  constructor(props) { // 构造函数，开始实例化组件，只执行一次
    // 你只能在派生类中使用 super() 。若尝试在非派生的类（即：没有使用 extends
    // 关键字的类）或函数中使用它，就会抛出错误。
    // 作为构造函数创建一个对象
    // 等价于
    // constructor() {
    //   this.props = props;
    // }
    super(props);

    this.state = {
      imageData: [{
        url: img1
      }, {
        url: img2
      }, {
        url: img3
      }, {
        url: img4
      }],
      activeIndex: 0
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  componentDidMount() {
    // 获取路由上的参数
    console.log(this.props);
    this.sliderStart();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  sliderStart() {
    this.timerID = setInterval(() => {
      const { state: { imageData, activeIndex}} = this;
      this.setState({ activeIndex: activeIndex === imageData.length - 1 ? 0 : activeIndex + 1});
    }, 6000)
  }

  handleItemChange(item) {
    const { state: { imageData, activeIndex}} = this;
    let isPrev = item === 'prev';
    let index = activeIndex;
    if (item !== 'next' && item !== 'prev') {
      this.setState({activeIndex: item.activeIndex});
      return false;
    }
    clearInterval(this.timerID);
    if (isPrev) {
      index = index === 0 ? imageData.length - 1 : index - 1
    } else {
      index = index === imageData.length - 1 ? 0 : index + 1
    }
    this.setState({ activeIndex: index});
    this.sliderStart();
  }

  render() {
    const { state: { imageData, activeIndex }  } = this;
    const { props: { match: { params: { id } } } } =this;
    return (
      <div className="slider">
      <h3>路由上的参数为{id}</h3>
        <div className="wrap" id="slide-wrap">
          <Slider imgData={imageData} activeIndex={activeIndex}></Slider>
          <PrevNext activeIndex={activeIndex} handleItemChange={this.handleItemChange}></PrevNext>
          <Navigat imgData={imageData} activeIndex={ activeIndex } handleItemChange={this.handleItemChange} ></Navigat>
        </div>
      </div>
    );
  }
}

export default SliderWrap;
