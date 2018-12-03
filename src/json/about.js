/**
 * ABOUT ME
 * json information for building my portfolio
 */

 /* interests */
const interests = [
    "software development",
    "brazilian jiu-jitsu",
    "writing",
    "coffee" 
]

/* work */
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

/* projects */
const projects = [
    {
        "name": "strands",
        "about": "A light social media for short literature that I am currently developing for iOS.",
        "link": "",
        "images": [
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_1.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_2.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_3.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_4.png"
        ]
    },
    {
        "name": "treps.io",
        "link": "https://treps.io/",
        "about": "(Thought Reps) A thought log that utilizes spaced repetition to help users study and hold onto thoughts that might otherwise get lost in the bustle of life. Designed to feel like social media and become a seamless part of any daily routine.",
        "images": [
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_1.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_2.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_3.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_4.JPG'
        ]
    },
    {
        "name": "zipper",
        "link": "",
        "about": "My first dabble in mobile development. A simple beat-my-highscore style game where you help Zipper the robot dodge clouds and collect balloons. Due to lost source code (I've since started using source control) and updated Apple policies, it is no longer available for download.",
        "images": [
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/zipper_1.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/zipper_2.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/zipper_3.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/zipper_4.png"
        ]
    }
]

/* blogs */
const blogs = [
    {
        "title": "Xamarin iOS Validation Text Field Tutorial",
        "url": "https://medium.com/@ncwhorn/xamarin-ios-validation-text-field-tutorial-18a58a1c8411",
        "date": "9/4/2018"
    }
]

/* social */
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

module.exports = {interests, work, projects, social, blogs};