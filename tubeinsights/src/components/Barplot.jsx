import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';


export default function Barplot(props){
    return (
        <BarChart
            width={400}
            height={300}
            data={props.plotData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.XAxisDataKey} tick={false}>
                <Label offset={0} position="insideBottom" />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={props.YAxisDataKey} fill="#c20101" />

        </BarChart>
        
    );
};