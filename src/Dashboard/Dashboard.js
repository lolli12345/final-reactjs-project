import React ,{useState,useEffect} from 'react'
import style from './Dashboard.module.css'
import LineCharts from "./Charts/LineCharts";
import HorizontalChart from './Charts/HorizontalChart';
import PieChart from './Charts/PieChart';
import NotificationList from './NotificationList';
import OrderList from './OrderList'



function Dashboard() {
    
  let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
    "storage"
  ];

   const [userData ,setUserData] = useState({
    labels: [
      `Available (${localPerformance.available}GB)`,
      `System (${localPerformance.system}GB)`,
      `Used (${localPerformance.used}GB)`,
    ],

    datasets: [
      {
        data: [
          localPerformance.available,
          localPerformance.system,
          localPerformance.used,
        ],
        backgroundColor: ["#f7604c" , "#a8d582", "#4ed6b8"],
        fontColor: "#fff",
      },
    ],
   });
  

  return (
    <div >
      <h3>Welcome to, Admin</h3>
       <div className={style.flexdiv}>
           <div>
            <LineCharts />
           </div>
           <div>
            <HorizontalChart />
           </div>
        </div>

        <div className={style.flexdiv}>
          <div>
            <PieChart chartData={userData}/>
          </div>

          <div>
            <NotificationList />
          </div>

        </div>
        <div>
            <OrderList />
          </div>
    </div>
  )
}

export default Dashboard;