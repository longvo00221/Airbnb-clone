/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react'
import ClientOnly from '../components/ClientOnly'
import MapPage from './MapPage'
import ShowMap from "../components/ShowMap";



const page = () => {
    
  return (
    <ClientOnly>
        <div className='overflow-hidden'><MapPage/></div>
        <ShowMap/>
  </ClientOnly>
  )
}

export default page