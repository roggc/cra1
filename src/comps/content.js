import React from 'react'
import styled from 'styled-components'
import {Route} from 'react-router-dom'
import Home from './home'
import About from './about'

const Div=styled.div
`
background-color:grey;
border-radius:5px;
margin:20px;
padding:20px;
display:flex;
justify-content:center;
`

const Div2=styled.div
`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export default
()=>
{
    const el=
    <Div>
        <Div2>
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        </Div2>
    </Div>

    return el
}
