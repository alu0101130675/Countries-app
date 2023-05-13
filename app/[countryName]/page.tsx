import Image from "next/image";
import { getCountryInfoByName, getCountryNameByCca2Code, getCountryNames } from "../services/dataFetching";
import Link from "next/link";
interface CountryInterface {
  params:{countryName:string}
}
export async function generateStaticParams() {
  const names = await getCountryNames() 
  return names.map((name) => ({
    countryName: name.common,
  }));
}

export default async function Country({params}:CountryInterface) {
  const countryName = params.countryName
  const [countryInfo] = await getCountryInfoByName(countryName)
  const currencies = Object.entries(countryInfo.currencies)
  const languages = Object.values(countryInfo.languages).join(',')
  const nativeNameKeys = Object.keys(countryInfo.name.nativeName)
  const nativeName =  countryInfo.name.nativeName[nativeNameKeys[0]].common
  const borders = await Promise.all(countryInfo.borders.map(border => getCountryNameByCca2Code(border))) 
  return (
    <div className='py-12 pb-56 px-10 dark:bg-slate-800'>
      <Link
      href={'/'}
       className="py-2 px-8 rounded shadow-ProjectShadow shadow-gray-200 dark:shadow-black">
        ⬅️ Back
      </Link>
      <div className="flex flex-col lg:flex-row gap-16 mt-20">
        <Image
        className="flex-1 lg:h-96 lg:mr-11 object-fill"
        width={50}
        height={25}
        src={countryInfo.flags.svg}
        alt="flag"
        />
        <section className=" flex flex-col justify-evenly flex-1 lg:gap-0 gap-10">
          <div>
          <h1 className="text-3xl font-bold mb-6">{countryInfo.name.common}</h1>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 ">
              <div className="flex flex-col gap-2">
                <span>
                  <strong className="mr-1">Native Name:</strong> 
                  {nativeName}
                </span>
                <span>
                  <strong className="mr-1">Population:</strong> 
                  {new Intl.NumberFormat("us-IN").format(countryInfo.population)}
                </span>
                <span>
                  <strong className="mr-1">Region:</strong> 
                  {countryInfo.region}
                </span>
                <span>
                  <strong className="mr-1">Sub Region:</strong> 
                  {countryInfo.subregion}
                </span>
                <span>
                  <strong className="mr-1">Capital:</strong> 
                  {countryInfo.capital}
                </span>
              </div>
            <div className="flex flex-col gap-2">
                <span>
                  <strong>Top Level Domain:</strong> 
                  {countryInfo.tld}
                </span>
                <span>
                  <strong>Currencies:</strong> 
                  {currencies.map(([,{name}])=> name )}
                </span>
                <span>
                  <strong>Languages:</strong> 
                  {languages}
                </span>
            </div>   
          </div>
          </div>
          <div className="flex">
            <span className="w-1/3"><strong>Border Countries:</strong></span>
          <section className="flex flex-1 gap-1 flex-wrap items-center">
            {borders.map(border => 
              <Link
                href={`/${border}`}
                className="py-1 px-3 shadow-ProjectShadow shadow-slate-200 dark:shadow-black rounded-lg text-center align-middle dark:bg-slate-700" 
                key={border}
              >
                {border}
              </Link>)
            }
          </section>
          </div>
        </section>
      </div>
    </div>
   
  )
}
