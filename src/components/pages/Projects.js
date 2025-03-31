import { useLocation } from "react-router-dom";

import { useState,useEffect } from "react";

import ProjectCard from "../project/ProjectCard";
import Loading from "../layout/Loading";
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton";

import styles from "./Projects.module.css"

function Projects() {

    const [projectMessage, setProjectMessage] = useState('');
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
             .then((resp) => resp.json())
             .then((data) => {
                setRemoveLoading(true);
                setProjects(data);
             })
             .catch((err) => console.log(err))
        }, 3000)
        
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
         .then((resp) => resp.json())
         .then(() => {           
            setProjects(projects.filter((project) => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!');
         })
         .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Novo Projeto" />
            </div>
            {message && (
                <Message msg={message} type="success"/>
            )}
            {projectMessage && (
                <Message msg={projectMessage} type="success"/>
            )}

            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}

                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length == 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
                
                
            </Container>
            
        </div>
        
    );
}

export default Projects;