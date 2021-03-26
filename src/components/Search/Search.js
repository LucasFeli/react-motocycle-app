import React from 'react'
import "./Search.css"

export const SearchBar = ({query,onChange}) => {
    return (
        <div className="wrapper">
  
        <input className="search" type="text" placeholder="Search. .."value={query} onChange={onChange} />
        </div>
    )
}
 