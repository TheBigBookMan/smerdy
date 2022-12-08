import CoinCharter from "../images/CoinCharter.png";
import EmployeeTracker from "../images/EmployeeTracker.png";
import EmptyYourFridge from "../images/EmptyYourFridge.png";
import EntertainNow from "../images/EntertainNow.png";

//TODO for the new project page, add in a property- Maindescription- which will be the long description of what it is

export const mainProjectData = [
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
    title: "EntertainNow",
    img: EntertainNow,
    deployed: "",
    github: "https://github.com/TheBigBookMan/EntertainNow",
    description:
      "Full-stack, mobile first entertainment application where users can input entertainment criteria and then view the youtube trailer for what they are interested in. There is also user authentication and using a database to add to favourites.",
    mainDescription:
      "!!Currently having deployment issues!!- I built this full-stack application with the intention of learning more about Typescript, GraphQL and JWT user authorization. This was a really good test of a project for me as the scale of it wasn't big but the niche parts of it were a good learning step. I had always found that most entertainment search websites would allow you to browse around but never actually view the trailer for what you wanted, so I created this to be an easier method of browsing and viewing trailers. The user can also create an account and add entertainment to favourites to watch the trailers again later on if they want. I had trouble with adding in cookies to local storage/JWT, but I will work on that in future development for extra security.",
    technologies:
      "ReactJS, ExpressJS, NodeJS, Typescript/Javascript, TailwindCSS, Vite, GraphQL/Apollo, MongoDB/Mongoose, Third Party API, JWT, React Packages, and responsive design.",
  },
];
