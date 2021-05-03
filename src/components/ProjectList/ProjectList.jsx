import React from 'react';
import './ProjectList.css';

export default function ProjectList({title, active, setSelected, id}) {
    return (
        <li className={active ? "projectlist active" : "projectlist"}
        onClick={()=>{setSelected(id)}}>
            {title}
        </li>
    )
}
