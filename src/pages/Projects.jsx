import {projects} from './../helpers/projectList';
import ProjectBlock from "../components/Project/ProjectBlock";







export default function Projects () {
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

                {projects.map((project) => {
                    return (
                        <ProjectBlock
                        key={project.id}
                        title={project.title}
                        img={project.img}
                        id={project.id}

                        /> 
                    )
                })}

            </ul>
        </div>
    </main>
    )
}