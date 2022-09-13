# Run the project:

## Settings:
Open 2 terminals...
- 1 Terminal
 inside GymmApp/GymApp run the command ```python -m venv venv``` and activate it  
 and than run ```pip install -r .\requirements.txt```
- 2 Terminal:
 inside GymmApp/GymApp/frontend run ```npm install```

## Run:
- 1 Terminal run:
 inside GymmApp/GymApp run ```python manage.py runserver```
- 2 Terminal run:
 inside frontend run: ```npm run dev```


# Commands used:

## Python Backend
- ```python -m venv venv```
- ```django-admin startproject GymApp```
- ```django-admin startapp api```
- ```django-admin startapp frontend```
- ```python manage.py makemigrations```
- ```python manage.py migrate```
- ```python manage.py runserver```

## JS frontend
- ```npm init -y``` (inside frontend app) cretaes node modules and package json
- ```npm i webpack webpack-cli --save-dev``` (inside frontend app) built the node modules folder
- ```npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev```
- ```npm install --save react@16.13.0 react-dom@16.13.0 --save-dev```
- ```npm install @material-ui/core```
- ```npm install @babel/plugin-proposal-class-properties``` (to use async and await in our js code)
- ```npm install react-router-dom```
- ```npm install @material-ui/icons``` (THE ICONS)

# Tools

Babel:
 Take our code and transpale it in code which is friendly with all browsers
also takes esn6 oder esn7 and transpale it

Webpack:
 Given a large number of files, it generates a single file (or a few files) that run your app. It can perform many operations: helps you bundle your resources.
 
Material UI:   
 (is like a bootstrap...) we also used their icons
 a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch



Scripts in package.json:
"dev": "webpack --mode development --watch" : watch for changes in our js files and automatically reblunded
