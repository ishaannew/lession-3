import React, { Component } from 'react';

class VacancySign extends Component{  

  render() {
    if(this.props.hasvacancy) {
      return(
        <div>
          <p>Vacancy</p>
        </div>
      );
    } else {
      return(
        <div>
          <p>No-Vacancy</p>
        </div>);
    }
  }
}


export default VacancySign;