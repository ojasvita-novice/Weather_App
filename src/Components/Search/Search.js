import React,{useState} from 'react'
import {AsyncPaginate} from "react-select-async-paginate"
import { geoUrl,options } from './Api';

const Search = ({onSearchChange}) => {

  const [search,setSearch]=useState(null);

  const loadOptions=async (inputValue)=>
  {
    return fetch(`${geoUrl}/cities?minPopulation=1000&namePrefix=${inputValue}`,options).then((response)=>response.json()).then((response)=>{
        return{
            options: response.data.map((city)=>
            {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label:`${city.name}, ${city.countryCode}`,
                }
            })
        }
    }).catch((err)=>console.error(err))

   
   
  }

  const handleOnChange=(searchData)=>
  {
    setSearch(searchData);
    onSearchChange(searchData);

  }

  return (
    <AsyncPaginate placeholder="Search for city" debounceTimeout={600} value={search} onChange={handleOnChange} loadOptions={loadOptions}></AsyncPaginate>
  )
}

export default Search