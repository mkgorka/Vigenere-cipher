import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      key: '',
      output: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ input: event.target.value })
  }
  handleOutputChange(event) {
    this.setState({ output: event.target.value })
  }
  handleKeyChange(event) {
    this.setState({ key: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    alert("Zaszyfrowane!");
    let input = this.state.input;
    let key = this.state.key 

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";//wiadomosc zaszyfrowana

      for (let i = 0; i < input.length; i++) {
        key += key; 
      }

      let keystr = key.substr(0, input.length);

      for (let i = 0; i < input.length; i++) {
        let currentLetter = input[i];

        if (currentLetter === " " || !currentLetter.match(/[A-Z]/g)) { 
          output += currentLetter;
          continue;
        }

        let currentIndex = alphabet.indexOf(currentLetter) + alphabet.indexOf(keystr[i]); 
        
  

        if (currentIndex - alphabet.length >= 0) { 
          currentIndex -= alphabet.length;
        }

        let newLetter = alphabet[currentIndex]; 

        output += newLetter;

      }
      this.setState({
        output: output
      })
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3>Vigenère cipher</h3>
            <form>
              <textarea id="input" value={this.state.input} onChange={this.handleInputChange} cols={40} rows={10} className="textarea" />
              <h1>Key:   <input type="text" id="key" onChange={this.handleKeyChange} /></h1>
              <button onClick={this.handleSubmit} className="button-primary">Encode</button>
              <div className="result">
                <textarea value={this.state.output} onChange={this.handleOutputChange} cols={80} rows={10} className="textarea" id="output" />
              </div>
            </form>
          </header>
        </div>
      );
    };
  }
  export default App;