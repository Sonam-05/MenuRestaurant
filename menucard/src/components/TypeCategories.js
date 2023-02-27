import React from 'react'
import './typeCategories.css'

const TypeCategories = ({handleChange}) => {
    return (
        <div className='TypeCategories'>
            <select onChange={handleChange} name="types" id="types">
                <option value="" disabled>Select Type</option>
                <option value="Veg">Veg</option>
                <option value="Non-veg">Non-veg</option>
                <option value="Vegan">Vegan</option>
                <option value="All Three" >All Three</option>
            </select>
        </div>
    )
}

export default TypeCategories
