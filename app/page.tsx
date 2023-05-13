import { Filter } from './components/Filter'
import { getCountryInfo } from './services/dataFetching'

export default async function Home() {
  const data = await getCountryInfo()
  return (
    <main className='bg-gray-100 dark:bg-slate-800'>
     <Filter countries={data}/>
    </main>
   
  )
}
