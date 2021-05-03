import React, { useEffect, useState } from 'react';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Scroll = styled.div`
  font-size: 48px;
  position: fixed;
  right: 12px;
  bottom: 10px;
  color: #f65261;
  cursor: pointer;
  z-index: 10;
`;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 360) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  return (
    <Scroll>
      {isVisible && (
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          onClick={scrollToTop}
          data-testid='icon'
        />
      )}
    </Scroll>
  );
};
