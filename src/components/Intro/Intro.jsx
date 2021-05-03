import React, { useEffect, useRef } from 'react';
import {init} from 'ityped'
import {Person, Mail, GitHub, LinkedIn} from '@material-ui/icons';
import './Intro.css';

export default function Intro() {
const textRef = useRef();
useEffect(()=>{
    init(textRef.current, 
        { showCursor: true,
            backDelay: 1500,
        strings: ['Student','Frontend Developer' ] })
},[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Me.jpg" alt="Profile"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm </h2>
                    <h1>Nancy Patel</h1>
                    <h3> <span ref={textRef}></span></h3>
                    <br/>
                    <br/>
                    <div className="itemContainer">
                       <Person className="icon"/>
                       <span>9099373224</span> 
                    </div>
                    <div className="itemContainer">
                       <Mail className="icon"/>
                       <span>nancy214patel@gmail.com</span> 
                    </div>
                    <div className="itemContainer">
                       <GitHub className="icon"/>
                       <span href="https://github.com/Nancy214">Nancy214</span> 
                    </div>
                    <div className="itemContainer">
                       <LinkedIn className="icon"/>
                       <span href="https://www.linkedin.com/in/nancy-patel-bbb025184/">Nancy Patel</span> 
                    </div>
                </div>
            </div>    
            
        </div>
    )
}
