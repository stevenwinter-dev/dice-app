import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = { 
            die1 : 'one',
            die2 : 'one'
         };
        this.genRandom = this.genRandom.bind(this);
    }
        genRandom(){
            const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
            const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
            this.setState({die1 : newDie1, die2 : newDie2});
        }
    render(){
        return (
            <div>
                <Die roll = {this.state.die1}/>
                <Die roll= {this.state.die2} />
                <div><button onClick={this.genRandom}>Roll Dice!</button></div>
                
            </div>
        )
    }
}

export default RollDice;