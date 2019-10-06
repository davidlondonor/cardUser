import React, { Component } from 'react'

class Cards extends Component {

    render () {
        
        return (
            <div className="container">
                <div className="row" >
                    <div className="col">
                        <div className="card">
                            <img src={this.props.teMandolaInfo.photo} className="card-img-top" alt="Hola"/>
                            <h4>{this.props.teMandolaInfo.name}</h4>
                            <p>{this.props.teMandolaInfo.region}</p>
                            <p>{this.props.teMandolaInfo.age}</p>
                            <a href="/" className="btn btn-primary">Boton</a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={this.props.teMandolaInfo.photo} className="card-img-top" alt="Hola"/>
                            <h4>{this.props.teMandolaInfo.name}</h4>
                            <p>{this.props.teMandolaInfo.region}</p>
                            <p>{this.props.teMandolaInfo.age} </p>
                            <a href="/" className="btn btn-primary">Boton</a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src={this.props.teMandolaInfo.photo} className="card-img-top" alt="Hola"/>
                            <h4>{this.props.teMandolaInfo.name}</h4>
                            <p>{this.props.teMandolaInfo.region}</p>
                            <p>{this.props.teMandolaInfo.age}</p>
                            <a href="/" className="btn btn-primary">Boton</a>
                        </div>
                    </div>

                 </div>
            </div>
            
        )
    }
}

export default Cards;