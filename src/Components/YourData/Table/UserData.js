import React from 'react'
import './UserData.css'

export default function UserData(props) {
    return (
        <div>
        <table className="table">
            <thead>
            <tr>
                <th>Calories</th>
                <th>Weight</th>
                <th>Waist</th>
                <th>Hips</th>
                <th>Date</th>
                <th>DELETE</th>
            </tr>
            </thead>
            <tbody>
            {props.data === null || props.data.length === 0 ? null: props.data.map( data =>{
            const {id, calories, weight, waist, hips, date} = data;
            return <tr id={id} key={id}><td>{calories}</td><td>{weight}</td><td>{waist}</td><td>{hips}</td><td>{date}</td><td><button onClick={props.deleteItem}><i className="fas fa-times"></i></button></td></tr>;
            })}
            </tbody>
        </table>
         {props.data === null || props.data.length === 0 ? <h3>No data!</h3> : null}
         </div>
    )
}
