import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) =>{
    return (
        <div className="project-list section">
            {projects && projects.map(project => { // the && means if len(projects) != 0 do the mapping
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;