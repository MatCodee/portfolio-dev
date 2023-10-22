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
        if(id) {
            const data = filter_project(id)
            setProject(...data)
        }
    },[id])

    return (
        <div className="container-home">
            <div className="container-tag">
                <span className="span-tag">{project.category}</span>
                <h2 className="title-detail">{project.title}</h2>
                <span className="span-date"> ( {project.date} ) </span>
            </div>
            {project.video === null ? (
                <Parallax
                    bgImage={project.image}
                    bgImageAlt="the dog"
                    className="image-parallax"
                    strength={800}
                ></Parallax>
                ) : (
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe
                    title={project.title}
                    src={project.video}
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                )}
            <div className="container-info">
                <div className="stack-tag">
                    {project.stack && project.stack.map((e,index) => (
                        <span key={index}>{e}</span>
                    ))}
                </div>

                <p>{project.description}</p>
                <div className="link-group">
                    <a className="button-secundary" href={project.source}>Source</a>
                    <a className="button-secundary" href={project.demo}>Demo</a>
                </div>                                  
            </div>

            {/* 
            <script src="https://player.vimeo.com/api/player.js"></script>
            */}
        </div>
    )
}

export default Detail