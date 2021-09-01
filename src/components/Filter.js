import React from 'react'

const Filter = (props) => {
    return (
        <label className='filter'>
            <strong>Filter By Category: </strong>
            <select className='filter_dropdowan' defaultValue={props.filterBy} onChange={props.updateFilter}>
                <option value='All'>All</option>
                <option value='Meat'>Meat</option>
                <option value='Fruits'>Fruits</option>
                <option value='Vegetables'>Vegetables</option>
                <option value='Seafood'>Seafood</option>
                <option value='Dairy'>Dairy</option>
                <option value='Bread'>Bread</option>
            </select>
        </label>
    )
}

export default Filter
