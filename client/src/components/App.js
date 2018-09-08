//Rendering leyer control (React Router)
//function component

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Components
import Header from './Header';
import Landing from './Landing';

//Css
import 'materialize-css/dist/css/materialize.min.css';

//Dummy components
// const Header = () => <h2>Header</h2>
const Dasboard = () => <h2>Dasboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
// const Landing = () => <h2>Landing</h2>



class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dasboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);