import React from 'react'
import { AiFillDashboard } from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {BsPerson} from 'react-icons/bs';
import style from'./Header.module.css';
import {useNavigate} from "react-router-dom";



function Header() {

  const navigate = useNavigate();
   
  const handleProcut = () =>{
     navigate('/product')
  }
  const handleDashboard = () =>{
    navigate('/dashboard');
  }
  const handleAccount = ()=> {
    navigate('/account');
  }

  return (
    <div className={style.header}>
        <div className={style.innerheader}>
            <h1>PRODUCT ADMIN</h1>
            <div className={style.headercontent}>
                <div className={style.dashboard}>
            <span onClick={handleDashboard}><AiFillDashboard  style={{paddingTop:'10px',paddingRight:'40px', color: 'white',width:'30px',height:'30px'}}/> <h5 style={{paddingLeft:"25px"}} >DashBoard</h5>  </span>
            </div>
            <span onClick={handleProcut}> <FaShoppingCart style={{ paddingLeft:'10px', color: 'white',width:'30px',height:'30px'}}/> <h5>Products</h5> </span>
            <span onClick={handleAccount}><BsPerson style={{ paddingLeft:'10px', color: 'white',width:'30px',height:'30px'}} />  <h5>Accounts</h5> </span>
            </div>
        </div>
         
         </div>
  )
}

export default Header