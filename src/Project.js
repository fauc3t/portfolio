import React, { Component } from 'react';

const about = require('./json/about');

/**
 * Project page component
 */
class Project extends Component {
    render() {
        // determine the project name based on the url path
        var projectName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

        // get the project info from about.js
        var projectInfo = about.projects.filter((proj) => {
            return proj.name === projectName;
        })[0];

        if(!projectInfo) {
            return (
            <div>
                <div className="title f-reg">404 Not Found :(</div>
            </div>);
        }

        // create the image tags
        var images = projectInfo.images.map((image, index) => {
            return(
                <img className="title" alt="" src={image}></img>
            );
        });

        return (
            <div>
                <div className="title f-reg">{projectName}</div>
                <div className="title">{projectInfo.about}</div>
                <div className="project-images">
                    {images}
                </div>
            </div>
        );
    }
  }
  
  export default Project;