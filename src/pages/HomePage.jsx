import React from 'react'
import { LandingView } from '../components/LandingView'
import {Rent} from '../components/Rent'
import {Buy} from '../components/Buy'
import {AboutUs} from '../components/AboutUs'
import {ContactUs} from '../components/ContactUs'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <>
      <LandingView />
      <AboutUs />
      <Buy />
      <Rent />
      <ContactUs />
      <Footer />
    </>
  )
}
