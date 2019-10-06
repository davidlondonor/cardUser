import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar'
// import 'datos.json'


class App extends Component {

  state = {
    todaLaInfoApi:[]
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?amount=3&ext')
      .then(response => response.json())
      .then(datos => this.setState({todaLaInfoApi:datos}))
  }

  render() {
    return (
      <div className="finalCard">
        <h1>Formulario</h1>
        <Navbar />
        <Cards teMandolaInfo={this.state.todaLaInfoApi} />
        {/* <Cards teMandolaInfo={this.state.todaLaInfoApi} />
        <Cards teMandolaInfo={this.state.todaLaInfoApi} /> */}
      </div>
    );
  }
}

export default App;

