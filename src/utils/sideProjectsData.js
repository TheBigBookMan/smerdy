import TeamProfileGenerator from "../images/TeamProfileGenerator.png";
import ReadMEGenerator from "../images/ReadMEGenerator.png";
import WeatherApp from "../images/WeatherApp.png";
import Cafe from "../images/Cafe.png";
import OldPortfolio from "../images/OldPortfolio.png";

export const sideProjectData = [
  {
    title: "Portfolio- Currently on",
    img: "",
    deployed: "",
    github: "https://github.com/TheBigBookMan/smerdy",
    description: "",
    mainDescription:
      "I wanted to create a portfolio that stood out a little bit more than the rest. I really enjoy learning new Javascript and React technologies, so creating a portfolio that shows off my curiosity I figured would be a smart decision. That's why I have tried to implement some more graphic design/3d modeling with React Three Fiber. Implementing the canvas utility that browsers can use, I created a 3D background with geometry and React Three Fiber metrics. I have also used a React package that provides a GitHub contributions calendar. I had to import the data from a third party API to GitHub and create an algorithm that would count my commits from each repo on their respective days.",
    technologies:
      "ReactJS, Javascript, TailwindCSS, React Three Fiber, React Packages and responsive design.",
  },
  {
    title: "Houride",
    img: "",
    deployed: "",
    github: "https://github.com/TheBigBookMan/Houride",
    description:
      "A car rental application where users can rent out their car for specific events and customers can pay per hour for the service.",
    mainDescription:
      "!!I am currently building this and it will take a while because it's very large application!!- My friend and I are trying to start a business where users will be able to sign up their car and drive people to events while being paid per hour. This would be for people who are looking for fancier cars to be taken to formals, weddings etc or wanting a bigger vehicle for a larger crowded event. This application is currently in development and is a great learning step for myself by using popular technologies- such as Typescript, React, GraphQL and PostgreSQL. I am enjoying the experience so far and will be working on this for a few months while I continue to work on smaller solo projects.",
    technologies:
      "ReactJS, Typescript/Javascript, TailwindCSS, Mobile-First Responsive Design, Vite, React Packages, GraphQL/Apollo, ExpressJS, NodeJS, NPM Packages, PostgreSQL, Prisma, JWT.",
  },
  {
    title: "Team Profile Generator",
    img: TeamProfileGenerator,
    deployed:
      "https://drive.google.com/file/d/1OURcazg1_q24l2h6Id1PUNoIRHLmJ9tE/view",
    github: "https://github.com/TheBigBookMan/Team-Profile-Generator",
    description:
      "This project utilizes the back-end programming language NodeJS with OOP, as well as front end languages- HTML, CSS and Javascript. The user will be prompted with inputting information about their employees and the program will create a HTML and CSS file with the information. The user will be able to interact with information such as email and github accounts for easy access to contacting the employees.",
    mainDescription:
      "This application was used with Object-Oriented Programming to design the layout of information for employees. Using the inquirer package, the user will be prompted with questions in relation to their employees. The user will input information and then a profile manager application will launch with the information added in.",
    technologies: "JEST, CSS, Javascript, OOP, NodeJS, NPM Packages.",
  },
  {
    title: "Social Network API",
    img: "",
    deployed:
      "https://drive.google.com/file/d/1fuazNoiwaC0yIwVe8dadhd-wi-ZKHfyC/view",
    github: "https://github.com/TheBigBookMan/Social-Network-API",
    description:
      "This back-end project was created to allow users to create a social-network profile and add/remove friends as well as creating a thought that could be reacted to by other friends. The thought could also be edited and removed whenever the user pleases. This utilizes the REST API which allows users to perform CRUD operations.",
    mainDescription:
      "For one of our bootcamp assignments we had to create a backend API for a social media application. The API would allow users to perform CRUD operations, such as creating an account, adding and removing friends, adding a thought comment and removing or editing that thought comment. This is only an API and will require further development to allow for user interface interaction. However it is a good showcase for how ExpressJS and the REST APIs work, as well as working with a NoSQL database (MongoDB) and connecting it to Javascript using the ORM Mongoose.",
    technologies:
      "NodeJS, ExpressJS, REST API, MongoDB, Mongoose and Insomnia.",
  },
  {
    title: "Portfolio- Old",
    img: OldPortfolio,
    deployed: "https://thebigbookman.github.io/Ben-Smerd-Portfolio/",
    github: "https://github.com/TheBigBookMan/Ben-Smerd-Portfolio",
    description:
      "This was one of the first portfolios I created and the first application I created using React. This is a single page application, and was a fun trial run to test out how React worked.",
    mainDescription:
      "In our bootcamp we had to create a portfolio using React and this was the first application I built using React and I think is a good measure for how far I have come when comparing it to the current portfolio I have created today. These are only around 2 months difference between they were built, so the difference in how much I have grown and learnt is great to see. I used CSS-In-JS styling, which was also a move I decided to do at the time because I hadn't used TailwindCSS before, so this also shows the progress I have grown from using regular CSS to now Tailwind. I like this project as a whole because I thoroughly enjoyed creating it and learning how React components worked especially.",
    technologies: "Javascript, ReactJS, NPM Packages.",
  },
  {
    title: "WhatToRead",
    img: "",
    deployed: "",
    github: "https://github.com/TheBigBookMan/WhatToRead",
    description:
      "This is a server-side book search database for a library, where users will be able to perform CRUD operations to query the database for information about certain books and leave reviews for others.",
    mainDescription:
      "!!Currently in development!!- I am wanting to increase my server-side logic and command line skills, so I thought it would be great to create a library book database. Users will be able to query the database through the Inquirer package and find information on interested books. The users will also be able to see if the books are in stock, leave reviews for others and put them on hold. This app will also use JWT for the user to be authenticated when logging in. The use of a relational database will be needed due to the relationships of books, customers and review comments.",
    technologies:
      "NodeJS, ExpressJS, GraphQL, PostgreSQL, Prisma, Third Party API, NPM Packages, JWT",
  },
  {
    title: "ReadME Generator",
    img: ReadMEGenerator,
    deployed:
      "https://drive.google.com/file/d/1EuQuHXA-1whJwjeJi644p5tQqawym99Z/view",
    github: "https://github.com/TheBigBookMan/ReadME-Generator",
    description:
      "Users are able to input information they want on their ReadME file and then the ReadME file will be created into their root directory.",
    mainDescription:
      "Once the application has started, the user will be prompter with some questions in regards to the README file content. The questions will require answers in the form of text input, list selection or no response (with default choice). These prompts are created by importing the dependency Inquirer in the command line. A README file will be generated within their root folder.",
    technologies: "NodeJS, NPM Package- Inquirer",
  },

  {
    title: "Weather App",
    img: WeatherApp,
    deployed: "https://thebigbookman.github.io/Weather-Dashboard/",
    github: "https://github.com/TheBigBookMan/Weather-Dashboard",
    description:
      "This is a client-side weather app where users can search for a city they want to know the weather for. The weather will show up for current day and for 5 days afterwards. There is a history of each city that the user searches so they can view later.",
    mainDescription:
      "This was one of the first applications I made after starting to learn to code. I was about 4 weeks into my coding bootcamp and had just started learning Javascript and APIs. This is a basic weather app that utilizes API calling and logic to determine the correct information is being presented on the screen. Using the local storage to store the history was a good learning step as to what computers can do and how programmers can interact locally with every user.",
    technologies: "HTML, CSS, Javascript, Third Party API and Local Storage",
  },
  {
    title: "Coffee & Bagels",
    img: Cafe,
    deployed: "https://thebigbookman.github.io/Cafe-template/",
    github: "https://github.com/TheBigBookMan/Cafe-template",
    description:
      "This is a static website template for a cafe, very basic design which allows the cafe to show off their food and drinks menu.",
    mainDescription:
      "I created this in my spare time while halfway through the bootcamp as I wanted to test out my CSS skills with someone simple. I like the idea of being able to build real world applications for businesses, and in te future I may further develop this application so the business can link up their Instagram and Facebook so they have a live feed of their posts.",
    technologies: "HTML and CSS",
  },
];
