import React from 'react'
import { getHeroesByPublisher } from '../helpers/GetHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( hero => (
                <HeroCard key={hero.id} {...hero} />
            ))
        }
    </div>
  )
}
