import { Button } from './components/ToogleButton'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:text-white  dark:bg-slate-800`}>
      <header className='drop-shadow-2xl flex justify-between py-4 px-10 shadow-slate-100 dark:bg-slate-700 dark:shadow-slate-900'>
        <div className='font-bold'>
          Where in the world?
        </div>
        <Button/>
      </header>
      {children}
      </body>
    </html>
  )
}
