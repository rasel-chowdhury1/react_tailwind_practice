import React from 'react';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const students = [
        {
          id: 1,
          name: "Student 1",
          math: 45,
          science: 50,
          english: 78,
        },
        {
          id: 2,
          name: "Student 2",
          math: 32,
          science: 50,
          english: 95,
        },
        {
          id: 3,
          name: "Student 3",
          math: 98,
          science: 60,
          english: 90,
        },
        {
          id: 4,
          name: "Student 4",
          math: 79,
          science: 40,
          english: 87,
        },
        {
          id: 5,
          name: "Student 5",
          math: 55,
          science: 30,
          english: 93,
        },
        {
          id: 6,
          name: "Student 6",
          math: 31,
          science: 20,
          english: 88,
        },
        {
          id: 7,
          name: "Student 7",
          math: 87,
          science: 19,
          english: 84,
        },
        {
          id: 8,
          name: "Student 8",
          math: 64,
          science: 35,
          english: 96,
        },
        {
          id: 9,
          name: "Student 9",
          math: 40,
          science: 70,
          english: 99,
        },
        {
          id: 10,
          name: "Student 10",
          math: 20,
          science: 25,
          english: 75,
        },
      ];

    return (
        <div>
            <LineChart
            width={500}
            height={300}
            data={students}
            >
               <Line type="monotone" dataKey="math" stroke="#82ca9d"></Line>
               <Line type="monotone" dataKey="science" stroke="#8884d8" activeDot={{ r: 8 }}></Line>
               <Line type="monotone" dataKey="english"></Line>
               <XAxis dataKey="name"/>
               <YAxis/>
               <Tooltip />
               <Legend />
               <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
        </div>
    );
};

export default Dashboard;