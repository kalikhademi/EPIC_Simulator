This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You need to follow these steps to run the application:

# Step 1:

Clone the code from the repo in [https://github.com/kalikhademi/EPIC_Simulator] using the following command:

### git clone [https://github.com/kalikhademi/EPIC_Simulator]

# Step 2:

Enter the local directory of the application using the following command on Terminal (MAC OSX and Linux) or Command Line (Windows):

### cd [local repository]

# Step 3:

Check package.json file and ensure scripts are notated as below:


"scripts": {
"start": "react-scripts start",

"build": "react-scripts build",

"test": "react-scripts test",

"eject": "react-scripts eject"

},

# Step 4:

Delete the node_modules folder and any 'lock' files such as package-lock.json if present.

# Step 5:

Install the Node Package Manager (NPM) using:

### npm install npm@latest -g

# Step 6:

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits and save.<br />
You will also see any errors in the console. You can use the Developer Tools to find more information (on browsers such as Mozilla and Google Chrome).

You will need to work with scripts in "build" and "src" directories only.

# build

You will only change the "index.html" and "favicon.ico" in this directory.
If you want to change the way that app looks, you need to access the index.html in this directory.[Lines 4 to 14]
"favicon.ico" will be used for the icon in the browser tab.

# src

All the functionalities of the application come from this directory. I will explain all the scripts and sections in detail.

# app.js and app.css

'app.js' includes all the functions related to the whole application. The output of this script will be exported as an application, and it is included in the 'index.js'.
app.css and any other '\*.css' files manage the styles of elements that were used, such as tables, result container, and buttons.

# index.js

'index.js' will get the react app from 'app.js' as a DOM element and pass it to the 'index.html,' which is the webpage you see in the browser.

# components

React applications are component-based to make the code reusable by using the same component in multiple settings. We have the following components in our app:

- AnswerOption: this component manages the answer options for the questions and how they need to be shown.
- Question: this component manages the question content and shows it on the webpage
- QuestionCount: the number of items is tracked using this component to show how many more you need to answer. It follows the progress but not the scores.
- Simulation: This component gathers the previous ones to render the whole quiz as one component.
- Result: This component presents results because the structure is very different from the quiz component.

# API

We need a way to encode our questions into the system. The quiz component can read JSON objects. Therefore, we change the questions from the Idaho document you shared with me into this component. We extract the collection of all questions form this component and use it in our Quiz. API directory contains the question API that the app will use to build the content. For each question, we need to read the content, answer options, type, and category. You can reuse the code for any set of questions by changing questions and their related information.

# styles

This directory includes all the styling files, which are .css files.

# SVG

This file includes SVG pictures that were used in the application.
All of the application components are in the component directory under "src." If you want to change anything about the features of this component, you need to do it here.

More comments about the functionality of the system are written inside the code.

# deployment

You can deploy the app on [heroku](https://heroku.com)using the following steps:

1. download the Heroku Command Line Interface using followng commands:

# brew tap heroku/brew && brew install heroku (Mac OS terminal)

# download the windows installer from this [link](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

2. enter the directory of your application using :

# cd [dicrectory of the application you cloned from GitHub in previous steps]

3. enter the following commands in the termianl (Mac OS X) or CMD (Windows):

- git init --> this will initialize the git repository for you
- heroku create \$$$APPNAME$$$ https://github.com/mars/create-react-app-buildpack.git  --> create the buildpack on heroku. You need to pick an app name which is all in lowercase and enter it in the place of $$$APPNAME$$\$
- git add . --> This will add the documents to the heroku app created in the previous step
- git commit -m "react-create-app on Heroku" --> commit all the changes to confirm
- git push heroku master
- heroku open --> this command will open a tab in the browser to run the application. You can also access it using [link](https://$$$APPNAME$$$.herokuapp.com/)

Everytime you change something in the repo you need to repeat the steps for git to update it.
