import React from 'react'
import './Form.css'

export default function Form(props) {

    let BMR = props.BMR;
    return (
        <div className="BMR-calculate">
            <h1>BMR CALCULATOR</h1>
        <form onSubmit={props.submitForm} className="form">
            <label htmlFor="vyska">Height:</label>
                <input onChange={props.getHeight} className="form-input" type="text" name="vyska" id="vyska" value={props.height}/>
            <label htmlFor="vaha">Weight:</label>
                <input onChange={props.getWeight} className="form-input" type="text" name="vaha" id="vaha" value={props.weight}/>
            <label htmlFor="vek">Age:</label>
                <input onChange={props.getAge} className="form-input" type="text" name="vek" id="vek" value={props.age}/>
            <span>
                <label htmlFor="man">Man</label>
                <input onClick={props.getRadio} className="radio" defaultChecked type="radio" name="pohlavie" id="man" value="man"/>
                <label htmlFor="woman">Woman</label>
                <input onClick={props.getRadio} className="radio" type="radio" name="pohlavie" id="woman" value="woman"/>
            </span>
            <button type="submit" className="btn-submit">CALCULATE</button>
        </form>
        <h3>Your BMR is: {BMR} kcla</h3>
        </div>
    )
}
