'use client'
import { regions } from "@/const"
import { CustomSelect } from "./CustomSelect"
import {SimpleCountry } from "@/types"
import { useState } from "react"
import { CountryDisplay } from "./CountryDisplay"
function filterCountries (filterRegion:string,countries:SimpleCountry[],countryName:string = ''){
  return countries.filter(({region,name}) => region.startsWith(filterRegion) && name.common.toLowerCase().startsWith(countryName) )
}
interface FilterInterface {
  countries:SimpleCountry[]
}
export const Filter:React.FC<FilterInterface> = ({countries}) => {
  const [region, setRegion] = useState<string>('')
  const [countryName,setCountryName] = useState<string>('')
  const countriesFiltered = filterCountries(region,countries,countryName)
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newCountryName= event.currentTarget.value.toLowerCase()
    setCountryName(newCountryName)
  }
  return (
    <>
     <section className="grid grid-cols-1 gap-2 md:grid-cols-[30%,15%] justify-between pt-12 mx-10">
      <input onChange={handleChange } className="p-3 pl-5 shadow-lg rounded shadow-gray-200 dark:bg-slate-700" placeholder="🔍     Search for a country..." type="text" />
      <CustomSelect region={region} setRegion={setRegion} options={regions} placeholder="Filter by region"/>
    </section>    
    <CountryDisplay countries={countriesFiltered}/>
    </>

  )
}