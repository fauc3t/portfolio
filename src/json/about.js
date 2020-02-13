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
        "name": "Amazon",
        "title": "Software Development Engineer II",
        "dates": "October 2019 - Present"
    },
    {
        "name": "Softheon",
        "title": "Software Engineer",
        "dates": "June 2016 - September 2019"
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
        "name": "thought reps",
        "path": "thoughtreps",
        "link": "https://thoughtreps.com/",
        "about": "A thought log that utilizes spaced repetition to help users study and hold onto thoughts that might otherwise get lost in the bustle of life. Designed to feel like social media and become a seamless part of any daily routine.",
        "images": [
            'https://thoughtreps.s3-us-west-2.amazonaws.com/assets/thought_reps_timeline_landing.gif'
            /*'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_1.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_2.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_3.JPG',
            'https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/treps_4.JPG'*/
        ]
    },
    {
        "name": "playlist sync",
        "about": "A web application that lets Spotify users sync up their favorite playlists into others to reduce redudancy.",
        "path": "playlist-sync",
        "link": "https://playlistsync.com",
        "images": [
            "https://nickhorn-portfolio.s3-us-west-2.amazonaws.com/playlist_sync_1.PNG",
            "https://nickhorn-portfolio.s3-us-west-2.amazonaws.com/playlist_sync_2.PNG"
        ]
    },
    {
        "name": "youtube playback extension",
        "about": "A google chrome extension for easily seeking to the exact time of a video and generating a link.",
        "path": "youtube-play-extension",
        "link": "https://bit.ly/2M6nHGN",
        "images": ["https://nickhorn-portfolio.s3-us-west-2.amazonaws.com/1280x800.png"]
    },
    {
        "name": "strands [on hold]",
        "about": "A light social media for short literature that I started development of for iOS. Although this has been put on hold, it is something I look forward to getting back to in the future.",
        "path": "strands",
        "link": "",
        "images": [
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_1.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_2.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_3.png",
            "https://s3-us-west-2.amazonaws.com/nickhorn-portfolio/strands_4.png"
        ]
    },
    {
        "name": "zipper",
        "path": "zipper",
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

module.exports = {interests, work, projects, social};
