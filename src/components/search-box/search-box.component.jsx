import React from 'react'
import './search-box.styles.css'

//functional component - dont have acces to state/lifecicle methods
//only to return some html based on props

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search' //because of styles
    type="search" 
    placeholder={placeholder}
    onChange = {handleChange}
      />
)

