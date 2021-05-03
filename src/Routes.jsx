import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { MovieDetails } from './components/MovieDetails';
import { PageNotFound } from './components/PageNotFound';
import { Search } from './components/Search';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MoviesList } from './components/MoviesList';

export const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      render={() => (
        <>
          <Header>
            <Search />
          </Header>
          <ErrorBoundary>
            <MoviesList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route
      path='/search/:query'
      component={() => (
        <>
          <Header>
            <Search />
          </Header>
          <ErrorBoundary>
            <MoviesList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route
      path='/film/:id'
      component={() => (
        <>
          <Header>
            <MovieDetails />
          </Header>
          <ErrorBoundary>
            <MoviesList />
          </ErrorBoundary>
        </>
      )}
    />
    <Route path='/404' component={PageNotFound} />
    <Redirect to='/404' />
  </Switch>
);
