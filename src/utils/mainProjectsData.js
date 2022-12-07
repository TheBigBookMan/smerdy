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
    mainDescription: "",
    technologies: "",
  },
  {
    title: "Employee Tracker",
    img: EmployeeTracker,
    deployed:
      "https://drive.google.com/file/d/15rB57lI7IGguM8PixYzD2ICHcf95mXYn/view",
    github: "https://github.com/TheBigBookMan/Employee-Tracker",
    description:
      "Backend application I created with NodeJS, ExpressJS and MySql. A server-side app that allows the user to view information about a workplace through querying the database. They can query about departments, roles and employees information.",
    mainDescription: "",
    technologies: "",
  },
  {
    title: "Empty Your Fridge",
    img: EmptyYourFridge,
    deployed: "https://thebigbookman.github.io/Empty-Your-Fridge/",
    github: "https://github.com/TheBigBookMan/Empty-Your-Fridge",
    description:
      "This is a ReactJS client-side application where users can input ingredients that they have laying around at home and select the type of meal they want and then multiple recipes will be presented for them to choose for a meal to empty their fridge!",
    mainDescription: "",
    technologies: "",
  },
  {
    title: "EntertainNow",
    img: EntertainNow,
    deployed: "",
    github: "https://github.com/TheBigBookMan/EntertainNow",
    description:
      "Full-stack, mobile first entertainment application where users can input entertainment criteria and then view the youtube trailer for what they are interested in. There is also user authentication and using a database to add to favourites.",
    mainDescription: "",
    technologies: "",
  },
];
