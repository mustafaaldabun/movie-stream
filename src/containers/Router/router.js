import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import HomePage from '../Homepage/HomePage';

const PageRoute = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path={props.to} render={() => <MovieDetails />} />
      </Switch>
    </Router>
  )
};

export default PageRoute;
