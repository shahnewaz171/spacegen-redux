## Spacegen Web Application

This is a [React.js](https://reactjs.org/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app).

## Getting Started

First, run the development server:

```bash
npm start
# or
yarn start
```
## ESLint Installation
SLint with Airbnb style guide with NPM and yarn.
```bash
npm i eslint prettier eslint-plugin-prettier eslint-config-prettier  eslint-plugin-node eslint-config-node
# or
yarn add eslint prettier eslint-plugin-prettier eslint-config-prettier  eslint-plugin-node eslint-config-node
```
For react.js we need to install the below commands.
```bash
npm i eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y  
# or
yarn add eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```
After finish install, create config file for ESLint in the main directory of the project.
```bash
touch .eslintrc
```

## Bootstrap Installation
Bootstrap install guide with NPM and yarn.
```bash
npm i bootstrap@5.0.2
#or
yarn add bootstrap@5.0.2
```
After that, we need to import two files into our App.js file.
```bash
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
```

## Redux and Redux-Toolkit Installation
Install Redux with Redux-Toolkit with NPM and Yarn by a single command.
```bash
npm i reduxjs/toolkit redux react-redux
#or
yarn add reduxjs/toolkit redux react-redux
```

## Unit Testing and Jest Installation
Install Testing Library with Jest with NPM and Yarn by a single command.
```bash
npm i @testing-library/react react-test-render jest-dom --save-dev
#or
yarn add @testing-library/react react-test-render jest-dom --save-dev
```

## Axios Installation
Install Axios with NPM and Yarn.
```bash
npm i axios
#or
yarn add axios
```

## Netlify Deploy Steps
At first, we need to add a 'build' file in our project with the below command.
```bash
npm run build
#or
yarn add build
```
After finish that, we need to drag and drop 'build' folder on the sites page of the netlify website.
