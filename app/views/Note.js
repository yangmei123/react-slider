/**
 *
 * @authors lml
 * @date    2017-12-29
 * @version $Id$
 */

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Note extends Component { // 用类的方式创建组件
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
      note: [
       'react-router,4.0以后，嵌套的路由需要单独放置在嵌套的根component中去处理路由，否则会一直有warning: You should not use Route component and Route children in the same route',
       '在路由createHashHistory.js文件中，跳转路由，如果和现在浏览的路由是相同的，会报警告，说是相同的路由：Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack',

       ]
    };
  }

  componentDidMount() {
    this.setState({ timer: setInterval(() => { 
      this.setState({date: (new Date()).toString()}) 
    }, 1000)});
  }

  componentWillUnMount() {
    clearInterval(this.state.timer);
  }
  
  render() {
    const noteData = this.state.note.map((data, index) => <li key={index}>{data}</li> );
    const { state: { date } } = this;
    return (
      <div className="box">
        <h2>使用react-router-dom做路由跳转。</h2>
        <h3>{}</h3>
        <ol>{noteData}</ol>
        <p>{date}</p>
      </div>
    );
  }
}

export default Note;
