import React, { Component } from 'react';
import styled from 'styled-components';

import Wallet from './../../models/wallet';

export default class Header extends Component {
  constructor(opts) {
    super(opts);

    this.state = {
      showMenu: false
    };

    this.handleBids = this.openBids.bind(this, 'bids');
    this.handleTerms = this.handleClick.bind(this, 'terms');
    this.handleOracles = this.handleClick.bind(this, 'oracles');
    this.handleFAQ = this.handleClick.bind(this, 'faq');
  }

  hasAccount() {
    return Wallet.hasAccount();
  }

  openBids(name) {
    if (this.hasAccount()) {
      this.handleClick(name);
    }
  }

  handleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleClick = e => {
    this.handleMenu();
    this.props.onMenuClick(e);
  };

  render() {
    return (
      <div className="t-itle">
        <div className="group8">
          <div className="the-most-accurate-pr">The most accurate prediction always wins!</div>
          <div className="n-av">
            <div className="ducatur-logo">
              <img className="fill13" src="./images/mvp  newfill 1  2.png" />
              <img className="fill31" src="./images/mvp  newfill 11.png" />
              <img className="fill51" src="./images/mvp  newfill 5  1.png" />
              <img className="fill71" src="./images/mvp  newfill 7  1.png" />
              <img className="fill9" src="./images/mvp  newfill 9.png" />
              <img className="fill111" src="./images/mvp  newfill 11.png" />
              <img className="group15" src="./images/mvp  new group 15.png" />
              <img className="group181" src="./images/mvp  new group 18  1.png" />
            </div>
          </div>
          <img onClick={this.handleMenu} className="menu-icon" src="./images/mvp  newmenu icon.png" />
          {this.state.showMenu && (
            <Menu>
              <Item onClick={this.handleBids} disabled={!this.hasAccount()}>
                Bids list
              </Item>
              <Item onClick={this.handleOracles}>Oracle list</Item>
              <Item onClick={this.handleTerms}>Terms of use</Item>
              <Item onClick={this.handleFAQ}>FAQ</Item>
            </Menu>
          )}
        </div>
      </div>
    );
  }
}

const Menu = styled.div`
  position: absolute;

  width: 200px;
  padding: 10px;

  background: white;

  right: 0;
  top: 60px;

  background-image: linear-gradient(-90deg, #3023ae 0%, #c86dd7 100%);
  border-radius: 6px;

  animation: showMenu 0.25s cubic-bezier(0.06, 0.67, 0.37, 0.99) forwards;
`;

const Item = styled.div`
  padding: 15px 10px;
  color: ${props => (props.disabled ? '#999' : 'white')};

  font-family: 'San Francisco', Helvetica, Arial, serif;

  &:hover {
    opacity: 0.56;
    background: #3023ae;
    border-radius: 6px;
    cursor: pointer;
  }
`;
