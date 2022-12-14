import React,{useEffect , useState} from 'react';
import style from "./OrderList.module.css";

function OrderList() {

   const [orderList , setOrderList] = useState({});

   useEffect(()=>{
    setOrderList(
        JSON.parse(localStorage.getItem("dashboardPage"))["orders"]
    );
   },[]);

   const orders = Object.keys(orderList).map(
    (key,index) => orderList[key]
   );
   console.log(orders);


  return (
    <div className={style.container}>
        <h2>Orders List</h2>

        <table>
            <thead>
                <tr>
                    <th>Order No.</th>
                    <th>Status</th>
                    <th>Operators</th>
                    <th>Location</th>
                    <th>Distance</th>
                    <th>Start Date</th>
                    <th>EST Delivery Due</th>
                </tr>
            </thead>
        </table>

        <tbody>
            {
                orders.map((item , i)=> (
                    <tr key={i}>
                        <td >
                            <strong>#{item.orderNo}</strong>
                        </td>
                        <td className={style.statustd}>
                            <span className={`${style.status}
                             ${
                                (item.status === "Moving" && style.Moving) ||
                                (item.status === "Pending" && style.Pending) ||
                                (item.status === "Cancelled" && style.Cancelled) ||
                                (item.status === "Delivered" && style.delivered)
                             }`}>
                             </span>
                             {item.status}
                        </td>
                        <td>
                            <strong>{item.operators}</strong>
                        </td>
                        <td>
                            <strong>{item.location}</strong>
                        </td>
                        <td>
                            <strong>{item.distance} km</strong>
                        </td>
                        <td>{item.startDate}</td>
                        <td>{item.deliveryDate}</td>
                    </tr>
                ))
            }
        </tbody>

    </div>
  )
}

export default OrderList