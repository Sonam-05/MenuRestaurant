import React from 'react'
import './category.css'
import data from '../Data';
import { filterByCategory } from '../store/menus';

const Category = ({type, catVal, setCatVal}) => {
    const categories = new Set(data.map((singleObj) => singleObj.category));
    const categoriesArray = ['All', ...categories]

  return (
    <div className='Category'>
      {categoriesArray.map((value) => {
        return <section key={value} onClick={() => {filterByCategory(value, type)
        setCatVal(value)}}  className='categoriesContainer'>
            <span id={value} className={(catVal==value) ? "catSpan " : 'categorySpan'}>{value}</span>
        </section>
      })}
    </div>
  )
}

export default Category
