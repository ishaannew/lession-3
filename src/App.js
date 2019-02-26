import React, { Component } from 'react';
import './App.css';

import VacancySign from './components/VacancySign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="products">
            <VacancySign hasvacancy={false}/>
        </div>
      </div>
    );
  }
}

export default App;
