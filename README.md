# Prioritizer
Routable's 2020 Frontend recruiting coding challenge.

This repository contains a React/Redux application which allows a user to rank and prioritize Issues in a single GitHub repository. There is no backend persistence, the prioritization is merely saved to Local Storage.

![demo](https://p91.f3.n0.cdn.getcloudapp.com/items/5zu1NrZ2/Screen%20Recording%202020-05-01%20at%2010.27%20PM.gif?v=d3773920ed101613851af2c599988635)

I tried to work on this project the same way I would work on a production application with a team. You're welcome to view my PR history to see how I typically communicate my progress visually using GIFs and fairly descriptive PR messages.

## Backend Implementation
If I were to implement a hypothetical backend, I would probably approach it one of two ways.

The first approach would be to wrap the GitHub API calls in a backend pass-through layer which fetches a list of repositories, and returns each Issue with its own sort order integer. Issues would be stored in PostgreSQL or similar DBMS. The challenge to this approach would be deciding when to check for changes to the master GH issues list. We could possibly use Webhooks or some kind of caching mechanism to keep our copy of Issue data/sorting up to date, but both present their own set of challenges.

The other, simpler approach I might take would be to essentially replicate the logic I wrote on this front-end project; allow GitHub to return a list of GitHub Issues, and merely store a minimal data set in our database, such as an array of Issue ids representing the prioritization order. The backend could decide how to handle new GH issues the same as the front-end does in this dummy application.

## Notes, limitations, project feedback
This was a fun project! It did take me considerably longer than the 2-4 recommended hours, but that's partly because I wanted to complete the whole assignment.

The requirement of rolling my own SASS added a bit of time, though it was good practice since I've gotten used to using Component libraries and CSS frameworks. In production applications I would typically try to use those kinds of solutions, something like Material-UI, or an in-house component library if I were on a larger team.

If I had a little more time, I would look into improving accessibility, as well as adding tools like CircleCI, CodeClimate test coverage/code quality tracking, Cypress for integration tests, and Netlify for automatic deployment.

# Create-React-App boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
