import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  return (
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id} </span>
                  <p>Lorem some random text.</p>
              </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Post by Vincent Tran</div>
                <div>2nd September, 2am</div>
            </div>
          </div>
      </div>
  )
}

export default ProjectDetails;
