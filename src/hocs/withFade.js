import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const Div=styled.div
`
    transition:opacity 1s;
    opacity:${({show})=>show?1:0};
`

export default
C=>()=>
{
    const [state,setState]=useState
    (
        {
            show:false
        }
    )
    useEffect
    (
        ()=>
        setState
        (
            {
                ...state,
                show:true
            }
        )
    )
    const el=
            <Div show={state.show}>
                <C></C>
            </Div>
    return el
}