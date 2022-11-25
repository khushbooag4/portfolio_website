import Greeting from 'components/Homepage/Greeting'
import Skills from 'components/Homepage/Skills'
import TopButton from 'components/utils/TopButton'
import React from 'react'
import Footer from '../../components/Homepage/Footer'
import Header from '../../components/Homepage/Header'
import { theme } from "../../theme"

function Home() {
  return (
   <>
   <Header theme={theme} />
   <Greeting theme={theme} />
   <Skills theme={theme} />
   <Footer theme={theme} />
   <TopButton theme={theme} />
   </>
  )
}

export default Home