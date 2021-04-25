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

export const FallbackImage = ({ src = '', onClick }) => {
  const [error, setError] = useState(false);

  const onImageError = () => setError(true);

  const imgSrc = !error ? src : poster;

  return (
    <Image
      onError={onImageError}
      onClick={onClick}
      src={imgSrc}
      width='9'
      height='16'
      alt='poster'
    />
  );
};

FallbackImage.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
