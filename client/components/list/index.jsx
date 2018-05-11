import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Items from './items';
import Popup from './../elements/popup';
import Wallet from './../../models/wallet';
import { BET_LESS, BET_MORE } from './../../models/consts';

export default class Predict extends Component {
  constructor(opts) {
    super(opts);

    this.state = {
      bets: []
    };
  }

  get myTokens() {
    const { tokens } = this.props;
    const userAccount = Wallet.getUserAccount();

    return tokens.filter(token => {
      return token.ownerToken.toLowerCase() == userAccount.toLowerCase();
    });
  }

  render() {
    return (
      <Wrapper onClose={this.props.onClose}>
        <Title>Your Bids List</Title>
        <Container>
          <Items bets={this.myTokens} />
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Popup)`
  background-color: rgba(255, 255, 255, 1);
  top: 133px;
  height: 584px;
  width: 955px;
  position: absolute;
  margin: 0;
  left: 243px;
  border-radius: 17px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  height: auto;
  width: 240px;
  margin: 50px auto 0;
  font-family: 'San Francisco', Helvetica, Arial, serif;
  font-size: 36px;
  color: rgba(12, 38, 74, 1);
  text-align: center;
`;

const Container = styled.div`
  text-align: center;
  padding: 30px;
  overflow-y: auto;
`;
