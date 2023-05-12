import {SimpleCountry } from "@/types"
import { CountryCard } from "./CountryCard"

interface CountryDisplayInterface {
  countries:SimpleCountry[]
}
export const CountryDisplay:React.FC<CountryDisplayInterface> = ({countries}) => {
  return(
    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 gap-10 m-10'>
    {countries.map(country =>{ 
      return (
        <CountryCard 
          key={country.name.official}
          capital={country.capital[0]}
          name={country.name.common}
          region={country.region}
          population={country.population}
          src={country.flags.svg}
        />
      )}        
    )}
  </div>
  )
}