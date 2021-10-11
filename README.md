# WATER MY PLANTS

![image](https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=)

- [WATER MY PLANTS](#water-my-plants)
  - [About](#about)
  - [Language](#language)
  - [Contributors](#contributors)
  - [Fast Instructions fro running this project](#fast-instructions-fro-running-this-project)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
  - [Private Route Notes](#private-route-notes)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
YOU are a plant lover. But, hate figuring out the pesky watering schedule? Or perhaps your thumb isn't very green? Our app helps you remember how much to water and when to get it right. 

## Language
We love JavaScript and React makes it easy. We are thrilled with Redux and the reducer pattern as part of our code design. The use of these tools enables follow up developers a base with which to scale up as needed. 

## Contributors
- Rick Mansfield [Lead Frontend Developer](https://rickmansfield.github.io/PortfolioWRM2021v2/)
- Sebastian Leal [Full Stack Web Dev & Computer Science Engineer]()
- Jordan Gearheart [Lead Backend Developer]()
- Alan Waddell [Frontend Development REACT/SPA's & Design]()
- Adam Smith [Frontend Development REACT/SPA's & Design]()
- Abraham Garcia [Frontend Development REACT/SPA's & Design]()

## Fast Instructions fro running this project
  - You need React and Node.js on your local environment. 
  - clone project
  - in terminal ```npm install```
  - then ```npm start```
  - find all necesssary imports at the top of each file. Be sure you load...
    -  npm i Yup
    -  npm i styled-components
    -  npm i redux redux-logger, redux-thunk
    -  npm i axios
  - Above all Have Fun!
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Happy Coding! Happy Hacking! You know we will be!

## Private Route Notes
- Note Tokens are stored in either Memory in the browser session storage or local storage. 

- __Session Storage__ = The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- __Local Storage__ HTML5 local storage makes it possible to store values in the browser which can survive the browser session. 
Local Storage. The Local Storage is a type of Web storage which like cookies is accessible on all windows in the browser. Unless you need something sent with "every request" local storage is superior for the authentication in this project and in most other use cases. While each has their advantages IMO local storage is the go to for temporary storage needs like tokens for login. 
- __Cookies__ While they can hold much less in storage they are older, and they requre you to set when they expire. Cookies like the other two accompany "every" http request and it's why they are smaller. 

- In this application the token is stored locally and can be observed in the "applications" tabe of Chrome or edge.
- Example code to use... 
- localStorage.setItem(name, 'bob')
- console.log(localStorage.getItem('name'))