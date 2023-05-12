import Image from "next/image"
import Link from "next/link"

interface CountryCardInterface {
  name:string
  src:string
  population:number
  region:string
  capital:string
}
export const CountryCard:React.FC<CountryCardInterface> = ({
  capital,name,population,region,src
}) => {
  return (
    <div className="rounded-md flex flex-col gap-2 h-full w-full justify-between bg-white shadow-lg shadow-grey ">
      <Image 
      className="w-full flex-1 rounded-md"
      alt={`${name} flag`}
      src={src}
      height={80}
      width={100}
      />
      <section className="p-6 flex flex-col gap-2">
      <Link href={`/${name}/`} className="mb-3 text-xl font-bold">{name}</Link>
      <span>
        <strong className="mr-1">Population:</strong>
        {new Intl.NumberFormat("us-IN").format(population)}
        </span>
      <span><strong>Region:</strong> {region}</span>
      <span><strong>Capital:</strong> {capital}</span>
      </section>
     
    </div>
  )
}