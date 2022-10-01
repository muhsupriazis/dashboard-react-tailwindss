import React from 'react'
import { portofolio1 } from '../../../assets'
import { Button, ButtonPlus, CardPortfolio } from '../../../components'

const Portfolio = () => {
  return (
    <main className='p-10'>
      <section className='flex justify-start gap-4'>
        <h1 className='text-xl items-center'>My Experience</h1>
        <ButtonPlus/>
      </section>
      <section className='my-6'>
        <CardPortfolio>
          <img src={portofolio1} alt={portofolio1}/>
          <h2 className='text-sm px-4 pt-4' >Dicodiing</h2>
          <p className='text-[12px] text-gray-600 px-4 pb-4' >Company Profile</p>
        </CardPortfolio>
      </section>
      <section className='my-6'>
        <Button>Delete</Button>
      </section>
    </main>
  )
}

export default Portfolio