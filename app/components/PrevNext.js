import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

class PrevNext extends Component {
  constructor(props) {
    super(props);
  }
  onItemChange(e) {
    this.props.handleItemChange(e);
  }
  render() {
    return (
      <div className="prevnext">
        <div className="btn-area">
            <span className="prev-btn" onClick={this.onItemChange.bind(this, 'prev')}>上一张</span>
            <span className="next-btn" onClick={this.onItemChange.bind(this, 'next')}>下一张</span>
        </div>
      </div>
    )
  }
}

export default PrevNext;
