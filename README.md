# React Typescript & Redux (just add water) Starter Code

granularity: file & code structure, react router and redux integration, example actions, reducers, and types

added by @eric

## getting started

Fork this repo and off you go!

## what is this?

Great question. This is the standard typescript create-react-app with react-router and notably, _redux_, improved file structure and code organization. It has all of the code needed for a property stored in redux "foo", including actions, reducers, and types.

## lol ok why don't I just use create-react-app

Have fun adding redux by hand :)

## how do I deploy & publish this?

I recommend Netlify (https://www.netlify.com/), it's free and super simple to use. Make an account and set up a new site from Git. Then link your Github and select your project's repo. And boom, it'll auto deploy whenever you push to main / master.

P.S. If you're getting errors when deploying related to warnings being treated as errors, go into deploy settings and add a new environment variable CI = false

If you don't want to use netlify, there are ways of hosting it yourself ranging from using a web proxy like Nginx to a totally comprehensive solution like Google Cloud App Engine or AWS.

## can I contribute?

Yes! Just make a PR

## here's the lame create react app stuff below

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
