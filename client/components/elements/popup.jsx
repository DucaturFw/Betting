import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export default class Popup extends Component {
  static propTypes = {
    caller: PropTypes.string,
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    window.addEventListener('click', this.onClose, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClose, false);
    this.node = null;
  }

  onClose = e => {
    const { caller, onClose } = this.props;
    if (!e.target.classList.contains(caller) && !this.node.contains(e.target)) {
      this.props.onClose();
    }
  };

  render() {
    const { props } = this;
    console.log(props);
    return <Wrapper {...props}>{this.props.children}</Wrapper>;
  }
}

const Wrapper = styled.div`
  /* opacity: 0;
  transform: translateY(2.4rem);
  animation: showUp 0.25s cubic-bezier(0.06, 0.67, 0.37, 0.99) forwards; */
`;
