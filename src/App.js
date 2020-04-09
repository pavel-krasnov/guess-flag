import React from 'react';
import Options from './Options';
import Result from './Result';
import './App.css';
import { getCurrentCountryAndAnswers } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      currentCountry: null,
      answers: [],
      answerCorrect: null
    };
  }

  componentDidMount = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(data => data.json())
      .then(countries => {
        this.setState({
          countries,
          ...getCurrentCountryAndAnswers(4, countries)
        });
      });    
  };

  onGuessBtnClick = (event) => {
    event.preventDefault();
    const checked = Array.from(event.target.elements).find(item => item.checked);
    checked && this.setState({
      ...this.state,
      answerCorrect: checked.value === this.state.currentCountry.name
    });
  };

  onNextBtnClick = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      ...getCurrentCountryAndAnswers(4, this.state.countries),
      answerCorrect: null
    });
  };

  render() {
    const { currentCountry, answers, answerCorrect } = this.state;
    const { flag } = currentCountry || {name: null, flag: null};
    return (
      <div id="app-container">
        {!currentCountry && <h1>LOADING...</h1>}
        {currentCountry && <img id="flag" src={flag} alt="Flag" />}
        {currentCountry && (answerCorrect === null ?
            <Options answers={answers} onSubmit={this.onGuessBtnClick} /> :
            <Result
              message={answerCorrect ? 'Correct!' : `Incorrect! The correct answer is ${currentCountry.name}`}
              onClick={this.onNextBtnClick}
            />
        )}
      </div>
    );
  }
};