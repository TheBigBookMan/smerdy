import TeamProfileGenerator from "../images/projectImages/TeamProfileGenerator.png";
import ReadMEGenerator from "../images/projectImages/ReadMEGenerator.png";
import StockGraph from "../images/projectImages/StockGraph.png";
import Cafe from "../images/projectImages/Cafe.png";
import OldPortfolio from "../images/projectImages/OldPortfolio.png";
import EasyReddit from "../images/projectImages/EasyReddit.png";
import TweetBot from "../images/projectImages/TweetBot.png";
import EmptyYourFridge from "../images/projectImages/EmptyYourFridge.png";
import CoinCharter from "../images/projectImages/CoinCharter.png";
import EmployeeTracker from "../images/projectImages/EmployeeTracker.png";

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
        title: "CoinCharter",
        img: CoinCharter,
        deployed: "https://coin-charter-au.herokuapp.com/",
        github: "https://github.com/bradbrad88/coin-charter",
        description:
            "This is a social crypto coin app that uses the MERN stack and GraphQL with a coingeko crypto third party API. I worked collaboratively in a team and mainly worked on front-end components, the database, routes and logic.",
        mainDescription:
            "!!The URL is currently down as we are migrating the database!!- This application is a social media/crypto analysis/technical analysis combination of concepts. Users can create an account, add friends, make comments, view friends activity and connect with friends. The user can also view cryptocurrencies and their information, while being able to save them to favourites, make comments on the coin and view others comments. Users can also create technical analysis for charts of the coins and upload a screenshot for others to view, comment and upvote. We are currently migrating the database and ORM from MongoDB/Mongoose to PostgreSQL/Prisma and (it was in MongoDB/Mongoose for our bootcamp required criteria) and we are searching to get a proper trading chart feature where users can save the actual chart to the database so other users can interact with it, rather than just a screenshot.",
        technologies:
            "Typescript/Javascript, ReactJS, NodeJS, JWT, TailwindCSS, GraphQL/Apollo, MongoDB/Mongoose, Third Party APIs, AWS S3 Buckets and multiple NPM packages.",
    },
    {
        title: "TweetBot (Python)",
        img: TweetBot,
        deployed:
            "https://drive.google.com/file/d/1dtcWgyMfEgKAyvmZm6_N2Hb7TsdMeMBx/view",
        github: "https://github.com/TheBigBookMan/TweetBot",
        description:
            "A basic web scraping python script that allows the user to sign into Twitter and post a tweet automatically.",
        mainDescription:
            "The application prompts the user to input their username, password and what they want to tweet. The script automatically uses web scraping to input the username and password to login. The web scraping then automatically posts the tweet on their account. Thought it was a little fun project to learn web scraping and can come in handy when I want to post a tweet quickly while i'm coding and I don't have to get out my phone or login on the desktop.",
        technologies:
            "Python, Web Scraping, Selenium, WebDriver, Time package, Third Party API",
    },
    {
        title: "Empty Your Fridge",
        img: EmptyYourFridge,
        deployed: "https://thebigbookman.github.io/Empty-Your-Fridge/",
        github: "https://github.com/TheBigBookMan/Empty-Your-Fridge",
        description:
            "This is a ReactJS client-side application where users can input ingredients that they have laying around at home and select the type of meal they want and then multiple recipes will be presented for them to choose for a meal to empty their fridge!",
        mainDescription:
            "I have been a student for as long as I could remember and this meant that I would always have some random ingredients lying around with no idea what to cook with them. I created this mobile-first application with the idea that users will have random ingredients lying around and they can input them into the application (with the select criteria) and then be able to view multiple recipes. They can then click on the recipes to find what other ingredients they will need to buy and how to make the food. I think of it as reverse engineering recipe-hunting. It is handy that the users can then save recipes to favourites for later if they would like to. I might further develop it by making it a PWA and allowing users to view their favourited recipes while offline.",
        technologies:
            "ReactJS, Javascript, TailwindCSS, Local Storage, Third Party API, React Packages and Responsive Design.",
    },
    {
        title: "StockGraph (Python)",
        img: StockGraph,
        deployed: "",
        github: "https://github.com/TheBigBookMan/StockGraph",
        description:
            "This is a simple GUI application where users can input certain criteria for a US stock, and then they will be able to view a price chart based on the input.",
        mainDescription:
            "I like the idea of having just a simple GUI that you can open up easily and just quickly search for a graph on a US stock price. I created this GUI with PySimpleGui with the intention of it being super straight forward and easy to use with a few clicks of a button. The user input details about which stock they want, date range and then the timeframe of each price. This information is then sent to the YahooFinance API call and then the user is presented with a chart with the line displaying the price movements, this was done with matplotlib and pyplot. The users US stocks are also saved into a .txt file to their computer as a basic database if they want to do quicker selection.",
        technologies:
            "Python, PySimpleGui, MatPlotLib, PyPlot, Yahoo Finance Third Party API and PyInstaller.",
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
        title: "Runners",
        img: "",
        deployed: "",
        github: "https://github.com/TheBigBookMan/Runners",
        description:
            "This is an application where users upload their movement data (walking, running, swimming and cycling so far) from applications (Strava, Nike Run Club and Map My Run so far) to get an overall view of movement statistics. It also allows users to create groups with friends and compare statistics. This solves the problem of people not being able to compare data with friends because they are using a different application to themselves.",
        mainDescription:
            "!!!Currently in development!!! As someone who likes to go for hikes, walks and runs, I always like to keep statistics of my daily, weekly, monthly and yearly exercises. I use the application Strava, and find it keeps good records of my information. However, I have friends who also like to do some exercises but they use different applications. I enjoy to have some sort of competition with friends to compare how much exercise we have completed, but it's hard to do that with separate applications. I wanted to have one place where all the data could be uploaded to then compare with friends, especially because some applications are better at recording a specific activity than others, so it would get messy trying to collect all data from different applications and keep a clean record of it. This is a great challenge for me because it is a tricky API to database architecture, as well as creating a social aspect of it with friends.",
        technologies:
            "ReactJS, Javascript/Typescript, TailwindCSS, React Packages, JWT, Vite, Third Party APIs, Apollo, Prisma, NodeJS, ExpressJS, GraphQL, MongoDB, NPM Packages.",
    },
    {
        title: "Employee Tracker",
        img: EmployeeTracker,
        deployed:
            "https://drive.google.com/file/d/15rB57lI7IGguM8PixYzD2ICHcf95mXYn/view",
        github: "https://github.com/TheBigBookMan/Employee-Tracker",
        description:
            "A server-side app that allows the user to view information about a workplace through querying the database. They can query about departments, roles and employees information.",
        mainDescription:
            "I created a relational database with REST API for the user to be able to perform complete CRUD queries and view the database within the command line. The user will be asked questions about what they would like to within the application by using the NPM package of Inquirer. The user will be able to view the database in the form of a table using the console.table NPM package, increasing a user experience.",
        technologies: "NodeJS, ExpressJS, MySql and NPM packages.",
    },
    {
        title: "EasyReddit (Python)",
        img: EasyReddit,
        deployed:
            "https://drive.google.com/file/d/1bHoyv5UEq2bs0Rve8Jr8UghHoWAD9Bks/view",
        github: "https://github.com/TheBigBookMan/EasyReddit",
        description:
            "This is an application where users who are bored while programming can run the file to have a quick browse of their favourite Reddit subreddits, posts and comments. The application runs in the command line using Python. Click the link below for a demo of how it works.",
        mainDescription:
            "I had just learning Python properly by taking an online course and decided I wanted to just test out some new skills, I also figured that I like to have a browse of Reddit for small breaks, so I figured I would make an application that allows me to do while I am coding and in Visual Studio Code still. Very basic application that just calls the Reddit API and allows the user to input the subreddit they want to look at, then they can look at posts based on criteria (New, Hot or Top) and then they can view the content for that post and then if they would like they can view comments for the post.",
        technologies:
            "Python, Colorama, Python Requests, Reddit Third Party API and the command line",
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
