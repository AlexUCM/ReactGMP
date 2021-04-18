import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { FormSelect } from './FormSelect';
import { Modal } from './Modal';
import { Input } from './Input';
import addMovie from '../redux/actions/addMovie';
import styled from 'styled-components';

const Form = styled.form`
  padding: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  color: #f65261;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 64px 0 0 0;

  & button {
    margin: 0 0 0 16px;
  }
`;

const Error = styled.p`
  text-align: right;
  font-size: 12px;
`;

export const AddForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    title: yup.string().required('Required'),
    poster_path: yup
      .string()
      .required('Required')
      .url('Enter correct url, like http://exmple.com'),
    release_date: yup
      .date()
      .max(new Date(), 'Release date must be at earler than today')
      .required('Required'),
    genres: yup.array().min(1, 'Select at least one genre to be proceed'),
    overview: yup.string().required('Required'),
    runtime: yup
      .number()
      .required('Required')
      .positive('Runtime must be a positive number')
      .integer('Runtime must be an integer'),
  });

  return (
    <Modal title='ADD MOVIE' onClose={onClose}>
      <Formik
        initialValues={{
          title: '',
          release_date: '',
          overview: '',
          runtime: '',
          genres: [],
          poster_path: '',
        }}
        onSubmit={(values) => {
          dispatch(addMovie(values));
          onClose(true);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
        }) => {
          const {
            title,
            release_date,
            overview,
            runtime,
            genres,
            poster_path,
          } = values;
          return (
            <>
              <Form>
                <Input
                  title='TITLE'
                  name='title'
                  type='text'
                  value={title}
                  placeholder='Title here'
                />
                <br />
                <Input
                  title='RELEASE DATE'
                  name='release_date'
                  type='date'
                  value={release_date}
                  style={{ color: release_date ? '#fff' : '#a9a9a9c0' }}
                />
                <br />
                <Input
                  title='POSTER PATH'
                  name='poster_path'
                  type='text'
                  value={poster_path}
                  placeholder='Poster URL here'
                />
                <br />
                <FormSelect
                  name='genres'
                  value={genres.join(', ')}
                  onChange={handleChange}
                />
                {touched.genres && errors.genres && (
                  <Error>{errors.genres}</Error>
                )}
                <br />
                <Input
                  title='OVERVIEW'
                  name='overview'
                  type='text'
                  value={overview}
                  placeholder='Overview here'
                />
                <br />
                <Input
                  title='RUNTIME'
                  name='runtime'
                  type='number'
                  value={runtime}
                  placeholder='Runtime here'
                />
              </Form>
              <Buttons>
                <Button type='reset' reset onClick={handleReset}>
                  RESET
                </Button>
                <Button type='submit' confirm isClose onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </Buttons>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

AddForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
