import React, { Component } from 'react';
import {
    NavLink,
  } from 'react-router-dom';

  import './Home.css'

const about = require('./json/about');

/**
 * Home page component
 */
class Home extends Component {
    render() {

        // get interest tags from about.js
        var interestList = about.interests.map((interest, index) => {
            return <div key={index}>{interest}</div>;
        });

        // build work tags from about.js
        var workList = about.work.map((workplace, index) => {
            return (
                <div key={index}>
                    <div className="f-reg">{workplace.name}</div>
                    <div className="in-20">{workplace.title}, {workplace.dates}</div>
                </div>
            );
        });

        // build project links from about.js
        var projectList = about.projects.map((project, index) => {
            return(
                <div key={index}>
                    <div><NavLink to={"projects/" +project.path}>{project.name}</NavLink></div>
                </div>
            );
        });

        // build social links from about.js
        var socialList = about.social.map((socialAccount, index) => {
            return(
                <div key={index}>
                    <i className={socialAccount.icon}></i><a href={socialAccount.link}>{socialAccount.name}</a>
                </div>
            );
        });

        var blogList = about.blogs.map((blog, index) => {
            return (
                <div key={index}>
                    <a key={index} href={blog.url}>{blog.title}</a> - {blog.date}
                </div>
            );
        });


        return (
        <div>
            <div className="title f-reg">interests:</div>
            <div className="in-20" id="interests">
                {interestList}
            </div>
            <div className="title f-reg">work:</div>
            <div className="in-20" id="projects">
                {workList}
            </div>
            <div className="title f-reg">projects:</div>
            <div className="in-20" id="projects">
                {projectList}        
            </div>
            <div className="title f-reg">blog:</div>
            <div className="in-20" id="blog">
                <a href="https://blog.nickhorn.com/>Personal Blog</a>
                {blogList}      
            </div>
            <div className="title f-reg">social:</div>
            <div className="in-20" id="social">
                {socialList}     
            </div>
            <div className="title f-reg"><a href="https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/NicholasHorn-Resume.pdf">resume</a></div>
        </div>
      );
    }
  }

  export default Home
