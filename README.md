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
- [SPA & React Router](#spa--react-router)
  - [Client Side Application(CSA) Route Managmeent](#client-side-applicationcsa-route-managmeent)
  - [USE OF PRESENTATIONAL &  CONTATINER COMPONENTS.](#use-of-presentational---contatiner-components)
  - [Presentational components](#presentational-components)
  - [Container components](#container-components)
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
# SPA & React Router 

## Client Side Application(CSA) Route Managmeent

- __ORGANIZATION__ We organized this project at the component level for ease of future development. 
- __STATE MANAGEMENT__ Note this gives us the abilty to incorporate both global and local state and manipulate state with props as needed. 
- __ROUTE MANAGEMENT__ In this CSA we implemented route managment in the index.js file
- __CLIENT SIDE ROUTING (CSR)__ Our Routing is handled internally by the javascript that is already on the page. We call this client-side routing.
- __BONUS-No Page Refresh__ the benefit of CSR is the page won't refresh. The data is just there, displayed when we ask for it. How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.
- __SWITCH TAG__ Hence, CSR allowed us to employed the switch tag to ensure visitors to the project see only what they "shuould" see. 
__SEVER-SIDE ROUTING__ to contrast and understand why we employed Client Side Routing here is an overview of Server Side Routing. 
When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

All of this is handled and achieved on the server, and there are a few things that happen here. First, the server will refresh the web page that we're looking at. This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. The information requested will be the only information given, no more, and no less. Because of this, we get the opportunity to load smaller portions of the webpage as opposed to requesting/loading the entire thing the whole time the way that we do in Client-Side Routing.

When you (the client) request a lot of information, your computer and subsequent internet-related devices run through a lot of protocols. The process can be really slow, especially when bandwidth is an issue.

## USE OF PRESENTATIONAL &  CONTATINER COMPONENTS. 
- We'd like to believe that we did a fair job of employing both properly according to industry standards. 
## Presentational components
Presentational components are those components whose only job is to render a view according to the styling and data passed to them. Essentially, they do not contain any business logic. That's why they are sometimes also called dumb components. This means that they don't have direct access to Redux or other data stores. Data is passed to them via props.

## Container components
Container components are those React components which have access to the store. These components make API calls, do processing and contain the business logic of the app. Container components shouldn't have the view logic or presentational logic. The job of container components is to compute the values and pass them as props to the presentational components. Hence, these components are sometimes also referred to as Smart Components.

Therefore, container components:

- are concerned with how things work.
- don’t usually have any markup of their own except for some wrapping Views, and rarely have any styles.
- provide the data and behavior to presentational or other container components.
- call Redux actions and provide these as callbacks to the presentational components.
-are often stateful, as they tend to serve as data sources.
are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
## Private Route Notes
- Note Tokens are stored in either Memory in the browser session storage or local storage. 

- __Session Storage__ = The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- __Local Storage__ (about persistance) HTML5 local storage makes it possible to store values in the browser which can survive the browser session. 
Local Storage. The Local Storage is a type of Web storage which like cookies is accessible on all windows in the browser. Unless you need something sent with "every request" local storage is superior for the authentication in this project and in most other use cases. While each has their advantages IMO local storage is the go to for temporary storage needs like tokens for login. 
- __Cookies__ While they can hold much less in storage they are older, and they requre you to set when they expire. Cookies like the other two accompany "every" http request and it's why they are smaller. 

- In this application the token is stored locally and can be observed in the "applications" tabe of Chrome or edge.
- Example code to use... 
  ```Javascript
  localStorage.setItem(name, 'bob')
  console.log(localStorage.getItem('name'))
  localStorage.removeItem('name')
  ```