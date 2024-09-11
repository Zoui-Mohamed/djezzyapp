import "./admin.css";
import { PieChart, Pie, Sector, Cell} from 'recharts';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Directeurgenerale from "./directeurgeneral";
import Chefprojet from "./chefdeprojet";


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  
  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  const data3 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  

function Dashboardscp(){
    const demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';
    return(
      <Chefprojet>
     <div >
        <div className="dashboardone">
            <div className="dashonecontain">
                <div className="dashonecontaintitle">
                    <h1 className="graphtitle">Graphics</h1>
                    <ResponsiveContainer width="100%" height="600%" className='changefont'>
        <PieChart width={200} height={200} className='changesize2'>
          <Pie
            data={data2}
            cx="28%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={47}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="explaine2">
        <h1 className="ex1">STATESTIQUE</h1>
        <h1 className="ex2">STATESTIQUE</h1>
        <h1 className="ex3">STATESTIQUE</h1>
        <h1 className="ex4">STATESTIQUE</h1>
      </div>
                </div>
            </div>

            <div className="infocontain">
                    <h1 className="infotitle">NOMBRE DE PROJET EN ATTENTE</h1>
                    <div className="infocon">
                    <p className="total">Total : </p>
            <h1 className="number">05</h1>
            <div className="vertical-line"></div>
            <p className="discr">des employer qualifier 
                pour <br></br> la  gestion et les 
                suivies des <br></br> projet  a court 
              et long terme jhkjklfkjfdskjwxkjckj </p>
                    </div>
                    <div className="infotwo">
            <h1 className="infotitre">NOMBRE EMPLOYER : </h1>
            <p className="total">Total : </p>
            <h1 className="number">49</h1>
            <div className="vertical-line"></div>
            <p className="discr">des employer qualifier 
                pour <br></br> la  gestion et les 
                suivies des <br></br> projet  a court 
              et long terme </p>
          </div>
          <div className="infochart-one">
              <h1 className="cotitle">STATESTIQUE</h1>
              <ResponsiveContainer width="100%" height="100%" className='changefont'>
        <PieChart width={20} height={20} className='changesize'>
          <Pie
            data={data2}
            cx="28%"
            cy="42%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={47}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="explaine">
        <h1 className="ex1">STATESTIQUE</h1>
        <h1 className="ex2">STATESTIQUE</h1>
        <h1 className="ex3">STATESTIQUE</h1>
        <h1 className="ex4">STATESTIQUE</h1>
      </div>
            </div>
            </div>
        </div>
        <div className="dashboardtwo">
            <div className="dashonetwocontain">
            <div className="dashchart">
            <h1 className="chart-title">LES STATESTIQUE DES PROJET</h1>
            <ResponsiveContainer width="100%" height="90%" className='chengefont'>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 14,
            right: 30,
            left: 0,
            bottom: 0,  
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
          </div>
          <div className="dashcharttwo">
            <h1 className="dashcharttwotitle">state</h1>
            <ResponsiveContainer width="110%" height="90%" className='chengefont'>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 55,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
          </div>
            </div>
        </div>
    </div>
    </Chefprojet>
    )
}


export default Dashboardscp;