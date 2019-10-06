import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './bWLwgP.css';
import './App.css';
// import { throwStatement } from '@babel/types';
// import { runInThisContext } from 'vm';


class SecretWord extends Component {

  handleChange(event){
    this.props.callback(event.target.value);
  }
  // getData(word){
  //   var url = "https://googledictionaryapi.eu-gb.mybluemix.net/?define="+this.state.secretWord+"&lang=en" 
  // }

  render(){
    return (
      <div className="Secret-Word-Div">
        <input className="Secret-Word-Text" type="password" onChange={this.handleChange.bind(this)}></input>
      </div>
    );
  }
}

class GuessingWord extends Component {
  constructor(){
    super();
    this.state = {
      guessingWord: "",
      // whites: 0,
      // blacks: 0,
      hint: "",
    };
    // alert("hello guessing word constr");

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guess = this.guess.bind(this);
  }

  handleSubmit(event){
    this.setState({guessingWord: event.target[0].value}, () => {
      this.guess();
      // this.props.onSubmit({
      //   guessingWord: this.state.guessingWord,
      //   whites: this.state.whites,
      //   blacks: this.state.blacks, 
      //   reachedEnd: false, 
      // })
    });
    event.preventDefault();
  }

  guess(){
    var secret_word = this.props.compareWord;
    var guessing_word = this.state.guessingWord;
    
    var whites=0,blacks=0;
    var word_length = secret_word.length;

    var secret_word_copy=secret_word.split('');
    var guess_word_copy = guessing_word.split('')

    for(let i=0; i<word_length; i++){
        if(guess_word_copy[i]===secret_word_copy[i]){
          whites +=1
          secret_word_copy[i]='+';
          guess_word_copy[i]='*';
        }
    }
    for (let i = 0; i < word_length; i++) {
        for (let j = 0; j < word_length; j++) {
            if(j!==i){
              if(guess_word_copy[i]===secret_word_copy[j]){
                blacks +=1;
                secret_word_copy[j]='+';
                break;
              }
            }
        }
    }

    var hint = ""
    if(whites || blacks)
      hint = whites+'W '+blacks+'B '
    else 
      hint = "None is matched."

    // console.log(whites, blacks)
    // check if the results are right.. as in Hint
    // this.setState({whites: whites});
    // this.setState({blacks: blacks});
    this.setState({hint: hint}, () => {
      this.props.onSubmit({
        guessingWord: this.state.guessingWord,
        hint: this.state.hint,
        reachedEnd: false, 
        chanceNumber: 1,
      })
    })

  }
  
  render() {
    /*
    var hint = ""
    if(this.state.whites || this.state.blacks)
      hint = this.state.whites+'W '+this.state.blacks+'B '
    else 
      hint = "Nil"

    console.log(this.state.whites, this.state.blacks, this.state.guessingWord)
    // alert(this.state.guessingWord+" up in render guessing word")
    */
    
    

    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input className="u-full-width" type="text"  />
        {/* <input className="Guessing-Button" type="submit" value="Check" /> */}
      </form>
    );
  }
}

class GameBoard extends Component {
  constructor(){
    super();
    this.state = {
      secretWord: "",
      chances: [], // all guessing words goes into this dictionary
      // add more
    };
    // alert(this.state.secretWord+" game board")
  }

  setSecretWord(params) {
    this.setState({
      secretWord : params
    })
  }

  addChance = (chance) => {
    this.setState({
      chances: [...this.state.chances, chance]
    })
  }

  render(){

    // Loop through this.state.chances dictionary....
    /*
    var hint = ""
    if(this.state.whites || this.state.blacks)
      hint = this.state.whites+'W '+this.state.blacks+'B '
    else 
      hint = "Nil"
    */

    return (
      <div className="container">
        <SecretWord callback={this.setSecretWord.bind(this)}/>
        <GuessingWord compareWord={this.state.secretWord} onSubmit={this.addChance} />
        {/* {JSON.stringify(this.state.chances)} */}
        {this.state.chances.map(chance => (
          <div className="row">
            <div key={chance.chanceNumber} className="four columns">{chance.guessingWord}</div>
            <div key={chance.chanceNumber} className="four columns"> {chance.hint}</div>
            <div key={chance.chanceNumber} className="four columns">{chance.reachedEnd}</div>
          </div>
        ))}
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Header">Word Puzzle!</h1>
        <GameBoard />
      </div>
    );
  }
}

export default App;
