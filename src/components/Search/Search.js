import React from 'react'
import "./Search.css"

export const SearchBar = ({query,onChange}) => {
    return (
        <div className="wrapper">
  
        <input className="search" type="text" placeholder="Buscar Moto. .."value={query} onChange={onChange} />
        </div>
    )
}
 