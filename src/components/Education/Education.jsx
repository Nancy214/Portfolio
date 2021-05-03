import React from 'react';
import './Education.css';
import {educationData} from '../../educationData';

export default function Education() {
    return (
        <div className="education" id="education">
        <h1>Education</h1>
            {educationData.map((data)=>(
                <div className="card">
                    <div className="card-item">
                        <h2>{data.title}</h2>
                        <h3>{data.institute}</h3>
                        <h4>{data.duration}</h4>
                        <h4>{data.score}</h4>
                </div>
            </div>
                ))}
    </div>
    )
}
