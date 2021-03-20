import React, { Component } from 'react';

import './search-box.styles.css';
        
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className = "search"
    type='search' 
    placeholder={ placeholder } 
    class = 'search-bar'
    onChange={handleChange}> 

  </input>
) 