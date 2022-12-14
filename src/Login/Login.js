import React, {useEffect ,useState } from 'react'
import style from './Login.module.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';




function Login() {

  
const navigate = useNavigate();

     const initialValues ={ username:"" , email:"" , password:""};

     const [formValues, setFormValues] = useState(initialValues);
    // console.log(formValues)
    const [formErrors , setFormErrors] = useState({});

    const [isSubmit , setIsSubmit] = useState(false);
    

     const handleChange = (e) => {
         //console.log(e.target);
         const {name , value} = e.target;
        // console.log(...name);
       // console.log(value);
        setFormValues({...formValues , [name]: value});
       // console.log(formValues)
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
     }

     useEffect(() => {
       
        const getData = async () => {
            try{
                const response = await axios.get(
                'https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json'
                );
                localStorage.setItem(
                    "accountsPage",
                    JSON.stringify(response.data.accountsPage)
                );
                localStorage.setItem(
                    "dashboardPage",
                    JSON.stringify(response.data.dasbhoardPage)
                );
                localStorage.setItem(
                    "productsPage",
                    JSON.stringify(response.data.productsPage)
                );
            } catch(err){
                console.log(err)
            }
        };
        
       

        if(Object.keys(formErrors).length === 0 && isSubmit);
        getData();

     } ,[]);



     const validate = (values) => {
         // console.log(values);
         console.log(values.username);
         const errors = {};
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         if(!values.username){
            errors.username = "Username is requires!";
         }
         if(!values.email){
            errors.email = "Email is requires!";
         }else if(!regex.test(values.email)){
            errors.email = "This is Not a valid Email!";
         }
         if(!values.password){
            errors.password = "Password is requires!";
         }else if(values.password.length < 4){
            errors.password = "Password should be more than 4 characters!";
         }else if(values.password.length > 10){
            errors.password = "Password should not be more than 10 characters!";
         }
         return errors;
     }

const handleClick = () =>{
   Object.keys(formErrors).length === 0 && isSubmit ?
    navigate('./dashboard') : console.log("please Login again!");
}
     

  return (
    <div className={style.container}>
       
        
        <form onSubmit={handleSubmit}>
            <h3>Welcome to DashBoard, Login</h3>
            <div className={style.uidivider}></div>
            <div className={style.uiform}>
                <div className={style.field}>
                    <label>UserName</label><br/>
                    <input type="text" name="username" placeholder="UserName" 
                    value={formValues.username}  onChange={handleChange}/>
                    <p>{formErrors.username}</p>
                </div><br/>
                <div className={style.field}>
                    <label>Email</label><br/>
                    <input type='email' name='email' placeholder='Email' 
                    value={formValues.email} onChange={handleChange}/>
                    <p>{formErrors.email}</p>
                </div><br/>
                <div className={style.field}>
                    <label>Password</label><br/>
                    <input type='password' name='password' placeholder='Password' 
                    value={formValues.password} onChange={handleChange}/>
                    <p>{formErrors.password}</p>
                </div><br/>
                <button type='submit' className={style.loginbutton} onClick={handleClick}>Login</button>
            </div>
        </form>
       
    </div>

  )
}


export default Login;