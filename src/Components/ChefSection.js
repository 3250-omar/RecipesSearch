import React from 'react'
import { Chefs } from './ChefsData'
import { ChefCard } from './ChefCard'
export const ChefSection = () => {
  return (
    <div className='section top-chefs'>
        <h1>Our Top Chefs</h1>
        <div className='chefs'>
            {Chefs.map((chef , index)=>{
                return <ChefCard data={chef} key={index} />
            })}
        </div>
    </div>
  )
}
