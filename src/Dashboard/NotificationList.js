import React,{useEffect, useState} from 'react'
import style from "./NotificationList.module.css";

const NotificationList = () => {

    const [notification , setNotification] = useState({});

    useEffect(()=> {
        setNotification(
            JSON.parse(localStorage.getItem("dashboardPage"))["notifications"]
        );
    },[]);

    const notificationarr = Object.keys(notification).map(
        (key,index) => notification[key]
    );
    //console.log(notificationarr)

  return (
    <div className={style.container}>

        <h2>Notification List</h2>
        {
            notificationarr.map((item , i) => (
                <div className={style.notificationcontainer} key={i}>
                    <img src={item.pic} alt={i}/>
                    <p>
                        {item.message}.
                        <br />
                        <span>{item.time}</span>
                    </p>
                </div>
            ))
        }

    </div>
  );
};

export default NotificationList