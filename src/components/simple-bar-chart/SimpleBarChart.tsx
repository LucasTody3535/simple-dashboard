import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ISimpleBarChart {
 data: Array<any>
 xAxisDataKey: string
 barDataKey: string
 legend: string
 color: string
}

function SimpleBarChart(props: ISimpleBarChart) {
 return (
   <ResponsiveContainer width="100%" height="100%">
     <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
       top: 5,
       right: 30,
       left: 20,
       bottom: 5,
     }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={props.xAxisDataKey} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={props.barDataKey} name={props.legend} fill={props.color} />
   </BarChart>
  </ResponsiveContainer>
 )
}

export default SimpleBarChart

