/**
 *
 * @authors lml
 * @date    2017-12-29
 * @version $Id$
 */

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { HashRouter, Route, hashHistory, Switch, Link } from 'react-router-dom'
import Slider from './views/SliderWrap';
import Note from './views/Note';


class App extends Component { // 用类的方式创建组件
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
      href: [{
              id: 1,
              name: '轮播图页',
              url: '/slider'
            },
            {
              id: 2,
              name: '说明页',
              url: '/note'
            }]
    }
  }

  render() {
    const { state: { href } } = this;
    const hrefData = href.map((href, index) => {
        return <p key={href.id}><Link to={`${href.url}/${href.id}`} activeclassname="active">{href.name}</Link></p>;
      }
    );
    // 4.0以后，嵌套的路由需要单独放置在嵌套的根component中去处理路由，否则会一直有warning:
    // You should not use <Route component> and <Route children> in the same route
    return (
      <div className="box">{hrefData}
        <Route path="/slider/:id" component={Slider} replace />
        <Route path="/note/:id" component={Note} replace />
      </div>);
  }
}

export default App;
