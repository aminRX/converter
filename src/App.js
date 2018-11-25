import React, { Component } from 'react';
import './App.css';
import FancyBorder from './FancyBorder/FancyBorder.js';
// import Converter from './Converter/ConverterComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: 32,
            from: 1,
            option1: 'C',
            option2: 'F'
        };
        this.handleOption1Change = this.handleOption1Change.bind(this);
        this.handleOption2Change = this.handleOption2Change.bind(this);
        this.handleInput1Change = this.handleInput1Change.bind(this);
        this.handleInput2Change = this.handleInput2Change.bind(this);

    }

    handleOption1Change(event) {
        let optionValue = event.target.value;
        this.setState({
                option1: optionValue
        }, () => {
            this.setConverted(this.state.from);
        });
    }

    handleOption2Change(event) {
        let optionValue = event.target.value;
        this.setState({
            option2: optionValue
        }, () => {
            this.setConverted(this.state.from);
        });
    }

    handleInput1Change(event) {
        let fromTo = event.target.value;
        this.setConverted(fromTo);
    }

    isOptionToOption(firstOption, secondOption) {
        return this.state.option1 === firstOption && this.state.option2 === secondOption
    }

    setResult(input, output) {
        this.setState((state, props) => {
            return {
                to: output,
                from: input
            }
        });
    }

    setConverted(fromTo) {
        let result;
        if(this.isOptionToOption('C', 'F')) {
            result = this.celsiusToFahrenheit(fromTo);
        } else if(this.isOptionToOption('F', 'F')){
            result = fromTo;
        } else if(this.isOptionToOption('F', 'C')) {
            result = this.fahrenheitToCelsius(fromTo);
        } else if(this.isOptionToOption('C', 'C')) {
            result = fromTo;
        }
        this.setResult(fromTo, result);
    }

    celsiusToFahrenheit(celsius) {
        let result = celsius * 1.8 + 32;
        return result;
    }

    fahrenheitToCelsius(fahrenheit) {
        let result = (fahrenheit - 32) * 5/9;
        return result;
    }

    handleInput2Change(event) {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <FancyBorder>
                            <select id="" name="" value={this.state.option1} onChange={this.handleOption1Change}>
                                <option value="C">C</option>
                                <option value="F">F</option>
                            </select>
                            <input name="" type="text" value={this.state.from} onChange={this.handleInput1Change}/>
                            <select id="" name="" value={this.state.option2} onChange={this.handleOption2Change}>
                                <option value="C">C</option>
                                <option value="F">F</option>
                            </select>
                            <input name="" type="text" value={this.state.to} onChange={this.handleInput2Change}/>
                        </FancyBorder>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

