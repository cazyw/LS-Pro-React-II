# Homework  - Building a Clock using React (Lesson 2)

This was a very simple web app that shows the local time - https://cazyw.github.io/LS-Pro-React-II/

It was a homework exercise from a Lambda School online course that went through Javascript, Node and React (https://lambdaschool.com/). 
The course has since been discontinued.

## Overview and Discussion

The objective of the lesson was to learn about state, the use of the `Date` object and how to update the state by time increments. 
We had to display the current time as live. In order to challenge myself I decided to not only display the time in text but also to display it by creating a 'flip clock'. I used images for each digit and changed the image as necessary each second.

**Fixed issue** Previously there was an issue with edge times. For example when the seconds change from 59 to 00, the minute digit card does not also change until the seconds have shifted to 01. I realised that this problem was occuring with all hour and minute cards but not second cards because the seconds were being calculated using `new Date()` each time whereas the minutes and hours were calculated using `this.state.clock` which was a second behind the current time. Changing setState to use newDate() for each digit solved this problem.

## Setup Instructions

### Project creation

The following was used to create this project and set it up so that it could  be run and then easily deployed to github...many thanks to the [Free Code Camp](https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089) for this rundown...

React project creation
```
$ npm install -g create-react-app 

$ create-react-app <your project name>

$ cd <your project name>
```

## Setup for publishing to Github

`create-react-app` has a bit of a tutorial for how to publish to github pages. Make sure there's a repo already setup on GitHub. Then 

1. edit `package.json`
```
"homepage": "https://<github-username>.github.io/<project-repo>"
```

2. install `gh-pages` module
```
npm install --save-dev gh-pages
```

3. add a script so we can use `npm run deploy` to deploy to github pages
```
"deploy" : "npm run build&&gh-pages -d build"
```

### General running and deploying

To start the server, this will open a browser and run the project
```
$ npm start
```

To build for production
```
$ npm build
```

To deploy to github pages
```
$ npm deploy
```