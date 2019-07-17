import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Content from './content'
import Footer from './footer'
import './app.css'

const Div=styled.div
`
  user-select:none;
  font-family:sans-serif;
  color:white;
`

export default
()=>
{
  const el=
    <Div>
      <Header message={<span>hey you!</span>}/>
      <Content/>
      <Footer message={<span>&copy; 2019 reactttt</span>}/>
    </Div>
  return el
}

