import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "./Chart.css";

export default function Chart(props) {
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const [goal, setGoal] = useState("cut");
  const [calories, setCalories] = useState(0);

  const getGoal = (e) => {
    setGoal(e.target.value);
  };

  const caloriePlan = () => {
    if (props.BMR === 0) {
    } else {
      if (props.gender === "man") {
        if (goal === "cut") {
          setCalories(Math.ceil(props.BMR * 1.2));
          setFat(Math.ceil(props.weight * 1));
          setProtein(Math.ceil(props.weight * 2.5));
          let count = fat * 9 + protein * 4;
          setCarbs(Math.ceil((calories - count) / 4));
        } else {
          setCalories(Math.ceil(props.BMR * 1.4));
          setFat(Math.ceil(props.weight * 1));
          setProtein(Math.ceil(props.weight * 2));
          let count = fat * 9 + protein * 4;
          setCarbs(Math.ceil((calories - count) / 4));
        }
      } else {
        if (goal === "cut") {
          setCalories(Math.ceil(props.BMR * 1.2));
          setFat(Math.ceil(props.weight * 1));
          setProtein(Math.ceil(props.weight * 1.5));
          let count = fat * 9 + protein * 4;
          setCarbs(Math.ceil((calories - count) / 4));
        } else {
          setCalories(Math.ceil(props.BMR * 1.4));
          setFat(Math.ceil(props.weight * 1));
          setProtein(Math.ceil(props.weight * 1));
          let count = fat * 9 + protein * 4;
          setCarbs(Math.ceil((calories - count) / 4));
        }
      }
    }
  };

  useEffect(() => {
    caloriePlan();
  });

  const chartData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [protein, carbs, fat],
        label: "Macronutrients",
        borderColor: "black",
        backgroundColor: ["rgb(255, 136, 0)", "#000", "#333"],
      },
    ],
  };

  return (
    <div className="Chart">
      <h1>Your goal:</h1>
      <span>
        <label htmlFor="bulk">Bulk</label>
        <input
          onChange={getGoal}
          className="radio"
          type="radio"
          name="goal"
          value="bulk"
        />
        <label htmlFor="cut">Cut</label>
        <input
          onChange={getGoal}
          defaultChecked
          className="radio"
          type="radio"
          name="goal"
          value="cut"
        />
      </span>
      <h2>Calculated calorie plan: {calories}kcla</h2>
      <Pie data={chartData} />
      <h3>Protein: {protein}g</h3>
      <h3>Carbs: {carbs}g</h3>
      <h3>Fat: {fat}g</h3>
    </div>
  );
}
