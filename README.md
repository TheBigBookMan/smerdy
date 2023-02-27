# Portfolio

## Introduction

This is a client-side portfolio website that I built so users can learn more about who I am and view projects that I have built to showcase my skill-set.

## Deployed URL

https://bensmerd.com/

## Technologies

This application uses Javascript, ReactJS, TailwindCSS, ThreeJS, React-Spring, GitHub API and other React/Javascript libraries. The website is mobile first created so it is responsive design for all sizes of screens.

## Functionality

### Initialization

```
npm run start
```

### NavBar

The NavBar contains contents for navigation to specific sections of the page. Using react-router-dom package for easier functionality and speed of selecting the requested destination. I also have a "Resume" button in the navbar where users can click and it will download my resume.

### Background

The background I used react-three-fiber library to be able to create a futuristic type of moving background. This was just using an image and multiplying it many times and then adding in a movement functionality so the images are constantly moving. Also using orbit controls which allows the user the capabilities to be able to move around the image.

### Home Page

The home page uses a custom font installer through react-three-drei and this is where I have my name in a fancy looking futuristic model. I also used react-three-fiber to create the spinning 3d ball and then used react-spring which allows the user to animate the ball when clicking it. I wanted to add in the ball interactivity to give me fun to the portfolio. I have links to my social profile on the page and a navigation button to my projects.

![](/src//images//readme//homepage.png)

### About Page

The about me page has a description of myself, while using some tailwindCSS to create some appearing and disappearing blocks of text under the skills section. I think also have a hobbies section where I have just some visuals that the user can click on to get a better understanding of who I am if they would like to.

![](/src//images//readme//aboutpage.png)

#### Hobbie Page

The hobbie page is just a specific page which displays some interests of mine through visual pictures with small descriptions for each picture. I made this with react-router to also allow the user to be taken to other hobbies through the small navigation within the page.
![](/src//images//readme//hobbiespage.png)

### Projects Page

The projects page contains 2 sections- the first section has 4 of my most interesting projects on display with screenshot of what the application looks like. The user can then hover the mouse of the image and then information and a title are presented, the user can then click on the title to be taken to the project page with more information. The side projects section has small titles for each project which can be clicked and then taken to the project page.

![](/src//images//readme//projectspage.png)

#### Project Page

The project page has information about the current project that the user wants to browse at, there are screenshots, links and descriptions about why I decided to build those projects and what technologies were used.

![](/src//images//readme//projectpage.png)

### Contact Page

The contact page has a spot where the user can send an email with a message inquiring about anything they like. This uses emailJS library and will send an email to my work email.

![](/src//images//readme//contactpage.png)

### GitHub Commits

THe GitHub commits section was a complex algorithm I created using the GitHub API to retrieve my commit history. Unfortunately the free version of the API doesn't have enough calls to retrieve all of my commits, so I have to hardcode retrieve it every now and then to update it. However using the library github commit block, I am able to have a cool graphic for my commit history.

![](/src//images//readme//githubcommit.png)

## GitHub URL

https://github.com/TheBigBookMan/smerdy
