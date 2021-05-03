import React, { useState, useEffect } from 'react';
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

export const FallbackImage = ({ src = poster, onClick, id }) => {
  const [error, setError] = useState(false);

  const onImageError = () => setError(true);

  const imgSrc = !error ? src : poster;

  useEffect(() => {
    if (id) setError(false);
  }, [id]);

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
  id: PropTypes.number,
  onClick: PropTypes.func,
};
