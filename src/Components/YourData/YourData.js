import React, { Component } from 'react'
import './YourData.css'
import InputForm from './InputForm/UserInput'
import Table from './Table/UserData'
import {v4 as uuid} from 'uuid'

class YourData extends Component {

state = {
    calories: 0,
    weight: 0,
    waist: 0,
    hips: 0,
    data: []
}

componentDidMount(){
    this.setState({data: JSON.parse(localStorage.getItem("data"))});
}

getCalories = (e) => {
e.preventDefault();
let calories = e.target.value;
this.setState({calories: calories});
}

getWeight = (e) => {
e.preventDefault(); 
let weight = e.target.value;
this.setState({weight: weight});   
}

getWaist = (e) => {
e.preventDefault();
let waist = e.target.value;
this.setState({waist: waist});    
}

getHips = (e) => {
e.preventDefault();
let hips = e.target.value;
this.setState({hips: hips});    
}



submitForm = (e) => {
if(this.state.calories === 0 || this.state.weight === 0 || this.state.waist === 0 || this.state.hips === 0 || this.state.data === ""){
e.preventDefault();
}
    else{
    e.preventDefault();
    let date = new Date();
    let formatedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    let newData = {id: uuid(),
        calories: this.state.calories,
        weight: this.state.weight,
        waist: this.state.waist,
        hips: this.state.hips,
        date: formatedDate
    };
        let history = JSON.parse(localStorage.getItem("data")) || [];
        history.push(newData);
        localStorage.setItem("data", JSON.stringify(history));
        this.setState({data: JSON.parse(localStorage.getItem("data"))});
        this.setState({
            calories: 0,
            weight: 0,
            waist: 0,
            hips: 0
        })
        document.getElementById("form-goals").reset();
    }
}




deleteItems = (e) => {
    const itemId = e.target.parentElement.parentElement.parentElement.id;
    let storage = JSON.parse(localStorage.getItem("data"));
    const index = storage.findIndex( data =>  data.id === itemId );
    storage.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(storage));
    this.setState({data: JSON.parse(localStorage.getItem("data"))});
    }


    render(){
        return (
            <div className="data-container">
                <InputForm 
                getCalories = {this.getCalories}
                getWeight = {this.getWeight}
                getWaist = {this.getWaist}
                getHips = {this.getHips}
                submitForm = {this.submitForm}/>
                <h1>Your yourney:</h1>
                <Table 
                data = {this.state.data}
                deleteItem ={this.deleteItems}/>
            </div>
        )
    }
    }

export default YourData;
