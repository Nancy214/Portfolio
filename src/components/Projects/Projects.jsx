import React, { useEffect, useState } from 'react'
import ProjectList from '../ProjectList/ProjectList';
import {allProjects, webProjects, pythonProjects} from '../../data'
import './Projects.css'

export default function Projects() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "web",
            title: "Web",
        },
        {
            id: "python",
            title: "Python",
        },
        
    ];
    useEffect(()=>{
        switch (selected) {
            case "all":
              setData(allProjects);
              break;
            case "web":
              setData(webProjects);
              break;
            case "python":
              setData(pythonProjects);
              break;
            default:
                setData(allProjects);
        }
    },[selected])
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item)=>(
                    <ProjectList 
                    title={item.title} 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt=""/>

                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
