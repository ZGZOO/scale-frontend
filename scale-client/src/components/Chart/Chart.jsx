import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import { NavLink } from "react-router-dom";
import Chart from "chart.js";
import "./Chart.scss";

const WeightChart = (props) => {
  const [entries, setEntries] = useState([]);

  const makeAPICall = async (data) => {
    try {
      const response = await axios.get(`${apiUrl}/users/${data.id}`, {
        headers: {
          Authorization: `Bearer ${props.user.token}`,
        },
      });
      setEntries(response.data.entries);
      //   const res = await fetch("http://localhost:3000/locations/1");
      //   const json = await res.json();
      const formattedData = prepareData(response.data.entries);
      createChart(formattedData);
      console.log("BarChart - json".json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (props.user !== null) {
      //   const parsedUser = JSON.parse(user.user);
      //   console.log("useEffect, parse: ", JSON.parse(user.user));
      //   getEntries(parsedUser);
      //   console.log(user.user);
      makeAPICall(props.user.user);
    }
  }, []);

  const prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [{ label: "Weights", data: [] }],
    };

    data.forEach((entry) => {
      chartData.labels.push(
        `${new Date(entry.date).getFullYear()}/${new Date(
          entry.date
        ).getMonth()}/${new Date(entry.date).getDate()}`
      );
      chartData.datasets[0].data.push(entry.weight);
    });

    console.log("charData", chartData);
    return chartData;
  };

  const createChart = (data) => {
    const ctx = document.querySelector("#weights");
    const tempsChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  };

  return (
    <>
      <h1>Weight Chart</h1>
      <canvas id="weights" width="300" height="200"></canvas>
      <NavLink to="/userpage" className="backToMyPage">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back to my page
      </NavLink>
    </>
  );
};

export default WeightChart;
