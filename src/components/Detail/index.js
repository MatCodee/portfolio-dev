import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Parallax } from 'react-parallax';
import "./index.css";

import projects from "../../utils/projects.json";


const Detail = () => {
    const {id} = useParams()
    const [project,setProject] = useState({})
    const filter_project = (id_params) => { return projects.filter((e) => Number(e.id) === Number(id_params))}
    
    useEffect(() => {
        const data = filter_project(id)
        setProject(...data)
    },[])

    return (
        <div className="container-home">
            <div className="container-tag">
                <span className="span-tag">{project.category}</span>
                <h2 className="title-detail">{project.title}</h2>
                <span className="span-date"> ( {project.date} ) </span>
            </div>
            <Parallax
                bgImage={project.image}
                bgImageAlt="the dog"
                className="image-parallax"
                strength={800}
            >
                Blur transition from min to max
            </Parallax>

            <div className="container-info">
                <p>{project.description}</p>
                <div className="link-group">
                    <a className="button-secundary" href={project.source}>Source</a>
                    <a className="button-secundary" href={project.demo}>Demo</a>
                </div>                                  
            </div>
        </div>
    )
}

export default Detail