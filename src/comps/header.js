import React,{useState,useRef} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Popup from './popup'
import {Link} from 'react-router-dom'
import useClickOutside from '../hooks/useClickOutside'

const Div=styled.div
`
    background-color:grey;
    border-radius:5px;
    padding:20px;
    margin:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Div2=styled.div
`
    border:1px solid white;
    border-radius:5px;
    padding: 5px;
    margin:5px;
    cursor:pointer;
`

const Ul=styled.ul
`
    margin:0px;
    padding:0px;
    list-style-type:none
`

const Div3=styled.div
`
transition:opacity .5s;
opacity:${({show})=>show?1:0};
`

export default
({message})=>
{
    const innerRef=useRef(null)
    useClickOutside
    (
        e=>clickPopup(e,true)
        ,innerRef
    )
    const [state,setState]=useState
    (
        {
            showPopup:false
        }
    )
    const clickPopup=
    (e,turnOff=false)=>
    {
        if(!turnOff)
        {
            setState
            (
                {
                    ...state,
                    showPopup:!state.showPopup
                }
            )
        }else
        {
            setState
            (
                {
                    ...state,
                    showPopup:false
                }
            )
        }
    }


    const el=
    <Div>
        <div>
        {message}
        </div>
        <Div2 onClick={clickPopup} ref={innerRef}>
            <FontAwesomeIcon icon={faBars} />
            <Div3 show={state.showPopup}>
                <Popup content=
                {
                    <Ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                    </Ul>
                } style={{right:'81px'}}/>
            </Div3>
        </Div2>
    </Div>
    return el
}
