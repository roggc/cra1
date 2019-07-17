import React from 'react'
import styled from 'styled-components'

const Div=styled.div
`
background-color:grey;
border-radius:5px;
font-size:.9em;
margin:20px;
padding:20px;
`

export default
({message})=>
<Div>
{message}
</Div>