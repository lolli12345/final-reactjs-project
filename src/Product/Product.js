import React from 'react'
import ProductCategoriesList from './ProductCategoriesList';
import ProductList from './ProductList';
import style from './Product.module.css'


function Product() {
  return (
    <div className={style.container }>
      <ProductList />
      <ProductCategoriesList />
    </div>
  );
};

export default Product