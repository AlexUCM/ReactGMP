import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import poster from '../images/fallback-image.jpg';

const Image = styled.img`
  position: absolute;
  top: 0;
  min-width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FallbackImage = ({ src }) => {
  const [state, setState] = useState({
    src,
    error: false,
  });
  const onImageError = () => {
    setState({ ...state, error: true });
  };
  const imgSrc = !state.error ? state.src : poster;
  return (
    <Image
      onError={onImageError}
      src={imgSrc}
      width='9'
      height='16'
      alt='poster'
    />
  );
};

FallbackImage.propTypes = {
  src: PropTypes.string.isRequired,
};
