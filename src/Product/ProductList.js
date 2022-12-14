import React, {useState , useEffect} from 'react';
import style from './Product.module.css';
import {RiDeleteBin6Line} from 'react-icons/ri';

function ProductList() {

    const [productList , setProductList] = useState([]);
    const [selected , setSelected] = useState([]);
    const [modal , setModal] = useState(false);

    const [category , setCategory] = useState("");
    const [description , setDescription] = useState("");
    const [expiryDate , setExpiryDate] = useState("");
    const [name , setName] = useState("");
    const [stock , setStock] = useState("");
    const [unitSold , setUnitSold] = useState("");


    useEffect(() => {
        setProductList(
            JSON.parse(localStorage.getItem("productsPage"))["products"]
        );
    },[selected]);



    const deleteHandler = (e) =>{
        
        let obj = JSON.parse(localStorage.getItem("productsPage"));
        let productData = obj["products"];
       // console.log(productData);

        let productAfterDelete = productData.filter(
            (item) => item.name !== e.target.id
        );
        obj = {
            ...obj,
            product: productAfterDelete,
        };
        localStorage.setItem("productsPage" , JSON.stringify(obj));

        setProductList(
            JSON.parse(localStorage.getItem("productsPage"))["products"]
        );
    };

    const checkBoxHandler = (e) => {
        if(e.target.checked){
            setSelected([...selected , e.target.id]);
        } else {
            selected.splice(selected.indexOf(e.target.id), 1);
            setSelected(selected);
        }
    };

    const selectedDeleteHandler = () => {
        let checkboxAfterDelete = productList.filter(
            (item) => !selected.includes(item.name)
        );
        //console.log(checkboxAfterDelete);
        
        let obj = JSON.parse(localStorage.getItem("productsPage"));
        obj = {
            ...obj,
            products: checkboxAfterDelete,
        };
        localStorage.setItem("productsPage" , JSON.stringify(obj));

        setProductList(
            JSON.parse(localStorage.getItem("productspage"))["products"]
        );
        
        let selectall = document.querySelectorAll("input[type=checkbox]:checked");
        for(let i=0; i<selectall.length; i++){
            selectall[i].checked = false;
        }
    };

    const addNewProduct = ()=>{
        setModal(true);
    };

    const addProductHandler = () => {
        let obj = JSON.parse(localStorage.getItem("productsPage"))
        console.log("before adding product:" , obj);

        if(
            category === "" ||
            description === "" ||
            expiryDate === "" ||
            name === "" ||
            stock === "" ||
            unitSold === "" 
        ) {
            alert("Please enter all details for product");
        }

        obj.product.push({
            category: category,
            description: description,
            expiryDate: expiryDate,
            name: name,
            stock: stock,
            unitSold: unitSold,
        });

        console.log("after adding product:" , obj);
        localStorage.setItem("productsPage" , JSON.stringify(obj));
        setProductList(
            JSON.parse(localStorage.getItem("productsPage"))["products"]
        );
        setModal(false);
    };

    const selectDeleteHandler = (e) =>{
        e.preventDefault();
    }
 
  return (
    <div>
        {
            !modal && (
                <div>
                <div className={style.tablebody}>
                    <h2>Products</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Unit Sold</th>
                                <th>In Stock</th>
                                <th>Expire Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productList.map((item, i)=>(
                                    <tr key={i}>
                                        <td id={i}>
                                            <input 
                                            type="checkbox"
                                            id={item.name}
                                            onChange={checkBoxHandler}
                                            ></input>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.unitSold}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.expireDate}</td>
                                        <td>
                                        <RiDeleteBin6Line
                                            className={style.icon}
                                            id={item.name}
                                            onClick={deleteHandler}
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <button className='btn' onClick={addNewProduct}>
                    Add New Product
                </button>
                <button className='btn' onClick={selectedDeleteHandler}>
                    Delete Selected Products
                </button>
            </div>
            )
        }
        {
            modal && (
                <div className={style.addproductmodal}>
                     <h2>Add Product</h2>
                     <label htmlFor='Category'>Category</label>
                     <form onSubmit={selectDeleteHandler}>
                        <input
                        type='text'
                        onChange={(e) =>setCategory(e.target.value)}
                        value={category} /><br /><br />
                        <label htmlFor='Description'>Description</label><br />
                        <textarea
                        onChange={(e)=> setDescription(e.target.value)}
                        value={description}
                        ></textarea><br /><br />
                        <label htmlFor='Expiry date'>Expiry Date</label><br />
                        <input 
                        type="date"
                        onChange={(e) =>setExpiryDate(e.target.value)}
                        value={expiryDate}
                        ></input><br /><br />
                        <label htmlFor='Name'>Name</label><br />
                        <input
                        type='text'
                        onChange={(e)=> setName(e.target.valur)}
                        value={name}
                        ></input><br /><br />
                        <label htmlFor='Stock'>Stock</label><br />
                        <input
                        type="text"
                        onChange={(e) => setStock(e.target.value)}
                        value={stock}
                        ></input><br /><br />
                        <label htmlFor='Unit Sold'>Unit Sold</label><br />
                        <input 
                        type='text'
                        onChange={(e)=> setUnitSold(e.target.value)}
                        value={unitSold}
                        ></input><br /><br />
                        <button className='btn' onclick={addProductHandler}>
                            Add Product
                        </button>
                        <button className='btn' onClick={()=> setModal}>
                            Cancel
                        </button>
                     </form>
                </div>
            )
        }
    </div>
  )
}

export default ProductList