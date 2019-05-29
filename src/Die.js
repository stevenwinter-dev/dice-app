import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render(){
        return <i className= {`Die fas fa-10x fa-dice-${ this.props.roll } ${this.props.rolling && 'rolling'}`}></i>
    }
}

export default Die;