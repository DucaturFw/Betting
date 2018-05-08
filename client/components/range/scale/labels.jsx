import React, { Component } from 'react';
import styled from 'styled-components';

export default function({ curr }) {
  let currentCourse = parseInt(curr),
    min = currentCourse - 4000,
    max = currentCourse + 4000,
    prices = [];

  for (let i = min; i <= max; i = i + 1000) {
    prices.push(i);
  }

  let items = prices.map((price, idx) => {
    const top = idx < 5 ? 50 : 110;
    return (
      <Item key={idx} style={{ left: 30 + 150 * idx, top }}>
        ${price}
      </Item>
    );
  });

  return <Wrap>{items}</Wrap>;
}

const Wrap = styled.div`
  position: relative;
`;

const Item = styled.div`
  color: white;
  position: absolute;
  top: 50px;
  width: 100px;

  opacity: 0.5;
  font-family: 'AppleSystemUIFont', Helvetica, Arial, serif;
  font-size: 14px;
  color: rgba(72, 198, 31, 1);
  text-align: center;
  line-height: 16px;
`;
