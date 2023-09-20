import React from 'react'
import HeroBackground from './HeroBackground'
import Banner from './Banner'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <HeroBackground>

      <Banner title='Mdrn Dealership' subtitle='Find Your Dream Car Here'>
        <Link to='/' className='btn-primary'>
          Return Home
      </Link>
      </Banner>

    </HeroBackground>
  )
}

export default ErrorPage;