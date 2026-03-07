import React from 'react'
import { HOC } from '../components/HOC'
import Hero from '../components/Hero'
import Menu from './Menu'
import SubMenu from './SubMenu'
import Banner from './Banner'


function Home() {
  return (
    <div>
       <Hero />
       <Menu />
       <Banner />
       <SubMenu />
    </div>
  )
}

export default HOC(Home)