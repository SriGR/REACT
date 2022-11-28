import React from 'react';
import './App.css';
import {PieChart,Pie, Tooltip} from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

let App = () => {
  let JSONdata= [
      {name:"X",value:100},
      {name:"Y",value:120},
      {name:"Z",value:50}
  ];
  return (
    <div> <h1>CHARTS :</h1>
    <div  className="App">
     <PieChart width={300} height={300}>
     <Pie
            dataKey="value" 
            isAnimationActive={false}
            data={JSONdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#6666ff"
            label
          />
      <Tooltip/> 
     </PieChart>
     <BarChart
          width={500}
          height={300}
          data={JSONdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="green" />
          <Bar dataKey="value" fill="blue" />
        </BarChart>
    </div>
    </div>
  );
}

export default App;
