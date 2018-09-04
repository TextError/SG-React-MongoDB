//Rendering leyer control (React Router)
//function component

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Header from './Header';

//Css
import 'materialize-css/dist/css/materialize.min.css';

//Dummy components
// const Header = () => <h2>Header</h2>
const Dasboard = () => <h2>Dasboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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
};

export default App;