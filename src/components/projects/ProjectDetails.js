import React from 'react'

const ProjectDetails = (props) => {
  //console.log(props.match.params.id);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae accusamus optio quo hic, iure nihil veritatis fugit autem blanditiis maiores officiis incidunt obcaecati ut. Autem consequatur dolor non facilis. </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Anton</div>
          <div>2018</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
