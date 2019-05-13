# Recipes

This is a simple [React.js](https://reactjs.org/) application where users can store recipe ideas along with their ingredients, and search for recipes by similar ingredients.

This branch is developed to point to an external API to allow for permanent data storage. The API used can be found [here](https://github.com/btaskew/recipes-api)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

Simply clone the repository and run ``npm install`` to setup the project. To use the external API you'll also need to 
clone [this project](https://github.com/btaskew/recipes-api) and run it locally. You'll then need to set the REACT_APP_API_ENDPOINT
in the .env file to be the root endpoint of the API.

Then run ``npm run`` to get started!
