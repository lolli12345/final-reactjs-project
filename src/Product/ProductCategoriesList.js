import React, { useState, useEffect } from "react";
import style from "./Product.module.css";
import styles from "./Modal.module.css";
import {RiDeleteBin6Line} from 'react-icons/ri';


const ProductCategoriesList = () => {
  const [productcategories, setProductCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const deleteHandler = (e) => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let categoriesData = obj["categories"];
    categoriesData.splice(categoriesData.indexOf(e.target.id), 1);
    obj = {
      ...obj,
      categories: categoriesData,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  };
  useEffect(() => {
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const newCategoryHandler = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategoryHandler = () => {
    if (newCategory === "") {
      alert("Please Enter a New Category");
      return;
    }
    productcategories.push(newCategory);
    console.log(productcategories);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      categories: productcategories,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setShowModal(false);
    setNewCategory("");
  };

  return (
    <div className={style.catcontainer}>
      <h2>Product Categories</h2>
      {showModal && (
        <div className={styles.modal}>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="productcat">Category Name</label><br />
            <input
              type="text"
              value={newCategory}
              id="productcat"
              onChange={newCategoryHandler}
            /><br /><br />
            <button className="btn" onClick={addCategoryHandler}>
              Add Category
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {!showModal && (
        <>
          <div className={style.tablebody}>
            <table>
              <tbody>
                {productcategories.map((item, i) => (
                  <tr key={i}>
                    <td>{item}</td>
                    <td>
                      <RiDeleteBin6Line
                        id={item}
                        onClick={deleteHandler}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn" onClick={showModalHandler}>
            Add New Category
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCategoriesList;