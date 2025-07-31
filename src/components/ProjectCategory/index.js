import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../Card";
import Button from "../Button";
import projects from "../../utils/projects.json";

import "./index.css";

const ProjectCategory = () => {
  const [element, setElement] = useState(projects);
  const category_filter = [
    "Frontend",
    "Backend",
    "FullStack",
    //'Inteligencia Arificial',
    //'Mobile',
  ];

  const filterProjectsByCategory = (category) => {
    const filteredData = category ? projects.filter((e) => e.category === category) : projects
    setElement(filteredData)
  } 

  return (
    <div className="container-home">
      <section className="section-layout">
        <h3> Proyectos </h3>

        <div className="list">
          {element.map((e, index) => {
            return (
              <AnimatePresence key={e.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                    <Card key={e.id} data={e} />
                
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectCategory;
