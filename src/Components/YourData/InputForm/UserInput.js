import React from 'react'
import './UserInput.css'

export default function UserInput(props) {
    return (
        <form id="form-goals" onSubmit={props.submitForm} className='form-data'>
            <input onChange={props.getCalories} placeholder="Calories" type="number"/>
            <input onChange={props.getWeight} placeholder="Weight" type="number"/>
            <input onChange={props.getWaist} placeholder="Waist" type="number"/>
            <input onChange={props.getHips} placeholder="Hips" type="number"/>
            <button type="submit">Submit</button>
        </form>
    )
}
