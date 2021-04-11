import React, { PureComponent } from 'react';
import { Button } from './Button';
import { AddForm } from './AddForm';
import { Search } from './Search';
import styled from 'styled-components';
import background from '../images/movies-background.jpg';

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 360px;
  background-color: #000b;
  margin: 0 0 10px 0;
  padding: 0 48px;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${background});
  background-size: cover;
  filter: blur(2px);
  z-index: -1;
`;

const Section = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 0;
`;

const Logo = styled.span`
  font-size: 22px;
  line-height: 22px;
  color: #f65261;
  cursor: pointer;
  z-index: 50;
`;

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ isOpen: true });
  }

  onCloseModal(event) {
    if (event.target.dataset.close) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Container>
          <Shadow />
          <Section>
            <Logo>
              <b>netflix</b>
              roulette
            </Logo>
            <Button add align='flex-start' onClick={this.onOpenModal}>
              + ADD MOVIE
            </Button>
          </Section>
          <Search />
        </Container>
        {isOpen && <AddForm onClose={this.onCloseModal} />}
      </>
    );
  }
}
