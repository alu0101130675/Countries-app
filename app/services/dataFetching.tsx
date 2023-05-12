import { Name, SimpleCountry } from '@/types'
import { Country } from '@/types'
export async function getCountryInfo()
 {return fetch('https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital')
  .then(res => {
    if(!res.ok) throw new Error('something was wrong')
    return res.json()})
  .then((data:SimpleCountry[]) => data)}

export async function getCountryNames(){
    return fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(res=>res.json())
      .then((names:Name[]) => names)
}

export async function getCountryInfoByName(name:string){
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,tld,subregion,region,population,flags,capital,languages,borders,currencies`)
    .then(res=>res.json())
    .then((countries:Country[]) => countries)
}
export async function getCountryNameByCca2Code(code:string){
  return fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)
    .then(res=>res.json())
    .then(({name}:{name:Name}) => name.common)
}

