/**
 * ABOUT ME
 * json information for building my portfolio
 */

const interests = [
    "software development",
    "brazilian jiu-jitsu",
    "writing",
    "coffee" 
]

const work = [
    {
        "name": "Softheon",
        "title": "Software Engineer",
        "dates": "June 2016 - Present"
    },
    {
        "name": "Cablevision",
        "title": "Automation Test Engineer",
        "dates": "July 2015 - May 2016"
    }
]

const projects = [
    {
        "name": "strands",
        "about": "A light social media for short literature that I am currently developing for iOS.",
        "images": [
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/strands_1.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/strands_2.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/strands_3.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/strands_4.png"
        ]
    },
    {
        "name": "zipper",
        "about": "My first dabble in mobile development. A simple beat-my-highscore style game where you help Zipper the robot dodge clouds and collect balloons. Due to lost source code (I've since started using source control) and updated Apple policies, it is no longer available for download.",
        "images": [
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/zipper_1.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/zipper_2.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/zipper_3.png",
            "http://ec2-52-10-65-179.us-west-2.compute.amazonaws.com/images/portfolio/zipper_4.png"
        ]
    }
]

const social = [
    {
        "name": "github",
        "link": "https://github.com/fauc3t",
        "icon": "fab fa-github"
    },
    {
        "name": "twitter",
        "link": "https://twitter.com/ncwhorn",
        "icon": "fab fa-twitter"
    },
    {
        "name": "medium",
        "link": "https://medium.com/@ncwhorn",
        "icon": "fab fa-medium"
    },
    {
        "name": "linked in",
        "link": "https://www.linkedin.com/in/nicholas-horn-4146a9b8/",
        "icon": "fab fa-linkedin"
    }
]

module.exports = {interests, work, projects, social};