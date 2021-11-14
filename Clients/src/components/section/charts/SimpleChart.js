import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis} from "recharts";

const simpleData = [
  {
    subject: "March",
    fees: 120
  },
  {
    subject: "June",
    fees: 20
  },
  {
    subject: "September",
    fees: 80
  },
  {
    subject: "December",
    fees: 40
  
  },


];
function SimpleChart(){
    return (
    <React.Fragment>
      <h1 style={{color:"black", fontSize:"25px" }}>Number of visitors</h1>
      <ResponsiveContainer width="100%" aspect={3} >
       <LineChart data= {simpleData}>
         <XAxis dataKey ="subject" />
         <Line dataKey="fees" />
         <YAxis />
       </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
   
    );
};

export default SimpleChart