import './globals.css'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hikeando Ando',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='z-50 w-full top-0 left-0 py-3 px-0 lg:absolute xl:bg-transparent xl:py-7'>
          <Nav />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
