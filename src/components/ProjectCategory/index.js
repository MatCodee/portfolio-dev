import { useEffect, useState } from "react";

import Card from "../Card";
import Button from "../Button";
import {AnimatePresence, motion} from "framer-motion";
import projects from "../../utils/projects.json";


const ProjectCategory = () => {

    const [element,setElement] = useState(projects)
    const category_filter = [
      'Frontend',
      'Backend',
      'FullStack',
      //'Inteligencia Arificial',
      //'Mobile',
    ]
  
    const filter_element = (category) => {
        const data = projects.filter((e) => e.category === category)
        setElement(data)
    }  


    return (
        <>
            <div className="container-home">
                <section className="section-layout">
                    <p>SELECTED PROJECTS</p>
                    <h3>Algunos de mis proyectos </h3>

                    <div className="category">
                        <ul>
                            {category_filter.map((e, index) => <Button key={index} filter_element={filter_element}>{e}</Button>)}
                        </ul>
                    </div>

                    <div className="list">
                        {element.map((e, index) => {
                            return <AnimatePresence key={index}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="list-item-1 animation-list">
                                        <Card key={index} data={e} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        })}
                    </div>

                </section>

            </div>
        </>
    )
}

export default ProjectCategory;