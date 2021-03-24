import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { FormSelect } from './FormSelect';
import { Modal } from './Modal';
import styled from 'styled-components';

const Form = styled.form`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  color: #f65261;

  & input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    outline: none;
    filter: invert(1);

    &:hover {
      opacity: 1;
    }
  }

  & input[type='number'] {
    padding: 0;
    margin: 0;
    background-color: #141414;
  }
`;

const Input = styled.input`
  margin: 8px 0 0 0;
  padding: 0 16px;
  background-color: #232323c9;
  border-radius: 5px;
  border-width: 0;
  font-size: 24px;
  line-height: 48px;
  color: #fff;
  outline: none;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 64px 0 0 0;

  & button[type='reset'] {
    margin: 0 16px 0 0;
  }
`;

export class EditForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      id: props.id,
      release: props.release,
      overview: props.overview,
      runtime: props.runtime,
      genres: props.genres,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { genres } = this.state;
    const { value, name, type, checked } = event.target;
    if (type !== 'checkbox') {
      this.setState({ [name]: value });
    } else if (checked) {
      if (genres.includes(value)) return;
      this.setState((prevState) => ({ genres: [...prevState.genres, value] }));
    } else {
      this.setState((prevState) => ({
        genres: prevState.genres.filter((genre) => genre !== value),
      }));
    }
  }

  render() {
    const { onClose } = this.props;
    const { id, title, release, overview, runtime, genres } = this.state;
    return (
      <Modal title='EDIT MOVIE' onClose={onClose}>
        <Form>
          <Label>
            MOVIE ID
            <Input name='id' type='number' value={id} disabled />
          </Label>
          <Label>
            TITLE
            <Input
              name='title'
              type='text'
              value={title}
              onChange={this.handleInputChange}
            />
          </Label>
          <br />
          <Label>
            RELEASE DATE
            <Input
              name='release'
              type='date'
              value={release}
              onChange={this.handleInputChange}
            />
          </Label>
          <br />
          <FormSelect
            value={genres.join(', ')}
            onChange={this.handleInputChange}
          />
          <br />
          <Label>
            OVERVIEW
            <Input
              name='overview'
              type='text'
              value={overview}
              onChange={this.handleInputChange}
            />
          </Label>
          <br />
          <Label>
            RUNTIME
            <Input
              name='runtime'
              type='text'
              value={runtime}
              onChange={this.handleInputChange}
            />
          </Label>
          <Buttons>
            <Button type='reset' reset>
              RESET
            </Button>
            <Button type='submit' confirm>
              SAVE
            </Button>
          </Buttons>
        </Form>
      </Modal>
    );
  }
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
};