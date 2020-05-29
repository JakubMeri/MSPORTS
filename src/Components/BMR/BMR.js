import React, { Component } from 'react'
import './BMR.css'
import Form from './Form/Form'
import Chart from './Chart/Chart'

export default class BMR extends Component {

    state = {
        BMR: 0,
        height: 0,
        weight: 0,
        age: 0,
        gender: "man",
        goal: ""
    }

    getHeight = (e) =>{
        let height = e.target.value;
        this.setState({height: height});
    }

    getWeight = (e) =>{
        let weight = e.target.value;
        this.setState({weight: weight});
    }

    getAge = (e) =>{
        let age = e.target.value;
        this.setState({age: age})
    }

    submitForm = (e) => {
        if(this.state.weight === 0 || this.state.height === 0 || this.state.age === 0){
            e.preventDefault();
        }
        else{
        e.preventDefault();
        if(this.state.gender === "man"){
        let BMR = Math.ceil(88.362 + (13.397 * this.state.weight) + (4.799 * this.state.height) -(5.677 * this.state.age));
        this.setState({BMR: BMR});
        }
        else{
        let BMR = Math.ceil(447.593 + (9.247 * this.state.weight) + (3.098 * this.state.height) - (4.330 * this.state.age));
        this.setState({BMR: BMR});
        }}
    }

    getRadioGender = (e) => {
        let gender = e.target.value;
        this.setState({gender: gender});
    }


    render() {
        return (
            <div className="BMR">
                <Form BMR={this.state.BMR}
                    weight={this.state.weight}
                    height={this.state.height}
                    age={this.state.age}
                    getHeight = {this.getHeight}
                    getWeight = {this.getWeight}
                    getAge = {this.getAge}
                    submitForm={this.submitForm}
                    getRadio={this.getRadioGender}/>
                <Chart
                BMR={this.state.BMR}
                gender={this.state.gender}
                weight={this.state.weight}/>
            </div>
        )
    }
}
