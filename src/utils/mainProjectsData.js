import Highlighters from "../images/projectImages/Highlighters.png";
import BookMe from "../images/projectImages/BookMe.png";
import EntertainNow from "../images/projectImages/EntertainNow.png";
import SmerdyGO from "../images/projectImages/SmerdyGO.png";

export const mainProjectData = [
    {
        title: "Highlighters",
        img: Highlighters,
        deployed: "https://highlighters.vercel.app/",
        github: "https://github.com/TheBigBookMan/highlighters",
        description:
            "This is a social media application where users post highlight events of a specific timeframe (daily, weekly, monthly, yearly). It encourages users to think back to moments that stood out as positive so they can post it as their highlight.",
        mainDescription:
            "!!!How to use- Sign in with a gmail account and you can start posting. If you want to check out the profile/friends features then feel free to search up 'Ben Smerd' in the search panel and you can see my posts and like/comment/follow. This application allows users to follow other users and be followed back, which then gives the user the ability to see who they are following posts as well as others see their posts from following them. How the timeframe posting works: A user can only make one post a day on the 'daily' timeframe, after a week the user can look back at the 7 'daily' posts and then choose the one which stood out the most as a highlight and select that as their 'weekly' post. Then at the end of the month the user can select one of the 4 'weekly' posts for their month, and end of the year choose one of the 12 'monthly' posts for their 'yearly' post. The idea of the application is that users have to look over their previous highlights they have had recently and then choose the one that stands out the most based on the timeframe. This is a great application for people who want to record nice moments in their life and be able to constantly be reminded of their own life highlights.",
        technologies:
            "Typescript/Javascript, ReactJS/NextJS13, NodeJS, FireBase, GoogleAuth, GoogleCloud, TailwindCSS, Vercel, React packages.",
    },
    {
        title: "BookMe (Java)",
        img: BookMe,
        deployed: "",
        github: "https://github.com/TheBigBookMan/bookme",
        description:
            "A small full-stack application where users can add comments to a small book database, utilising basic CRUD operations with a Java REST API backend.",
        mainDescription:
            "This is a small full-stack application where I learnt how to use Spring REST API for Java, as well as practicing object-oriented programming fundamentals. I wanted to learn while building so I just built a small book database, where I can do basic CRUD operations for comments of books. This was good practice for basic end points, as well as how OOP worked on the API. I used Typescript and React on the client side as well.",
        technologies: "Typescript, React, Java, Spring, MongoDB.",
    },
    {
        title: "SmerdyGO",
        img: SmerdyGO,
        deployed: "",
        github: "https://github.com/TheBigBookMan/SmerdyGO",
        description:
            "I am working on a solo project where users can keep track of important data for themselves. The user will have one app where they can manually keep track of things or import APIs to automatically update for them. This solves the problem of constantly switching between apps to keep track of everything.",
        mainDescription:
            "I was sick of the idea of having to constantly switch between apps to keep on top of my health and fitness, skills development and general goal setting. So I have set out to build an application that will handle all the data for me. Users can input their data manually to get up to date or connect APIs to other tracking applications that will automatically update their data for them. The user will be able to do things such as: have a todos list, goal setting and progress updates, section to categorise and maintain ideas, a calendar for events, contact book, health trackers with API integration and graphical interfaces, skills checklist to see progress, finance tracking for better budgeting, investing so users can stay on top of transactions, API connection for other usages and the ability to add in widgets which can be on the side to keep the user up to date with what they want to connect. This is a very big full stack application but will become very useful as users can have this to store everything they do on it.",
        technologies:
            "ReactJS, Typescript, Vite, JWT, NodeJS, MongoDB, GraphQL/Apollo, Prisma, Third Party APIs, TailwindCSS and multiple React and Node Packages",
    },

    {
        title: "EntertainNow",
        img: EntertainNow,
        deployed: "https://fascinating-horse-1ffdc9.netlify.app/",
        github: "https://github.com/TheBigBookMan/EntertainNow",
        description:
            "Full-stack, mobile first entertainment application where users can input entertainment criteria and then view the youtube trailer for what they are interested in. There is also user authentication and using a database to add to favourites. Testing credentials- Username: Gary, Password: 12345678",
        mainDescription:
            "I built this full-stack application with the intention of learning more about Typescript, GraphQL and JWT user authorization. This was a really good test of a project for me as the scale of it wasn't big but the niche parts of it were a good learning step. I deployed this using the Mongo Atlas, Heroku and Netlify which was a huge learning step for me. I had always found that most entertainment search websites would allow you to browse around but never actually view the trailer for what you wanted, so I created this to be an easier method of browsing and viewing trailers. The user can also create an account and add entertainment to favourites to watch the trailers again later on if they want. I had trouble with adding in cookies to local storage/JWT, but I will work on that in future development for extra security.",
        technologies:
            "ReactJS, ExpressJS, NodeJS, Typescript/Javascript, TailwindCSS, Vite, GraphQL/Apollo, MongoDB/Mongoose, Third Party API, JWT, React Packages, Heroku, Netlify and responsive design.",
    },
];
