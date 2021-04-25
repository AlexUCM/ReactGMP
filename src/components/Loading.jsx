import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = styled.div`
  margin: 32px 0 0 0;
  align-self: center;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const ldsSpinner = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Item = styled.div`
  transform-origin: 40px 40px;
  animation: ${ldsSpinner} 1.2s linear infinite;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #f65261;
  }

  ${(props) =>
    props.one &&
    `
    transform: rotate(0deg);
    animation-delay: -1.1s;
  `}

  ${(props) =>
    props.two &&
    `
    transform: rotate(30deg);
    animation-delay: -1s;
  `}

  ${(props) =>
    props.three &&
    `
    transform: rotate(60deg);
    animation-delay: -0.9s;
  `}

  ${(props) =>
    props.four &&
    `
    transform: rotate(90deg);
    animation-delay: -0.8s;
  `}

  ${(props) =>
    props.five &&
    `
    transform: rotate(120deg);
    animation-delay: -0.7s;
  `}

  ${(props) =>
    props.six &&
    `
    transform: rotate(150deg);
    animation-delay: -0.6s;
  `}

  ${(props) =>
    props.seven &&
    `
    transform: rotate(180deg);
    animation-delay: -0.5s;
  `}

  ${(props) =>
    props.eight &&
    `
    transform: rotate(210deg);
    animation-delay: -0.4s;
  `}

  ${(props) =>
    props.nine &&
    `
    transform: rotate(240deg);
    animation-delay: -0.3s;
  `}

  ${(props) =>
    props.ten &&
    `
    transform: rotate(270deg);
    animation-delay: -0.2s;
  `}

  ${(props) =>
    props.eleven &&
    `
    transform: rotate(300deg);
    animation-delay: -0.1s;
  `}

  ${(props) =>
    props.twelve &&
    `
    transform: rotate(330deg);
    animation-delay: 0s;
  `}
`;

export const Loading = () => (
  <Spinner>
    <Item one />
    <Item two />
    <Item three />
    <Item four />
    <Item five />
    <Item six />
    <Item seven />
    <Item eight />
    <Item nine />
    <Item ten />
    <Item eleven />
    <Item twelve />
  </Spinner>
);
