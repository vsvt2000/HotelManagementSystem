import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
    <div className='w-full'>
        <Header/>
      <Home/>
        <Footer/>
    </div>
    </>
  )
}
