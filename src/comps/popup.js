import React,{useRef} from 'react'
import styled from 'styled-components'

const Div=styled.div
`
position:absolute;
visibility:hidden;
`

const Div2=styled.div
`
position:relative;
visibility:initial;
border-radius:5px;
background-color:grey;
z-index:1;
padding:5px;
margin:5px;
border:1px solid white;
cursor:initial;
`

export default
({content,style})=>
{
    const outRef = useRef(null)
    const clickOut=
    (e)=>
    outRef.current.isEqualNode(e.target)?e.stopPropagation():false

    const el=
    <Div>
        <Div2 style={style} onClick={clickOut} ref={outRef}>
        {content}
        </Div2>
    </Div>
    
    return el
}
