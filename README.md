This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Description of the app: Star Wars Top Trumps

Using SWAPI: https://swapi.dev/documentation

Build an application to select random people or starships and render their details to see who would win based on a common attribute.
i.e. people have mass and starships have crew. A person with greater mass wins, a starship with more crew wins.

The app should render the attributes from the resource in a simple web page that allows you to ‘play’ the game.

Once two cards are displayed the app should declare one of the cards a winner based on the higher common attribute.

Having displayed the winning card, the user should be able to play again using an action button that repeats the same request.

1 - Score counter. If there are two players, left and right, show how many times each side has won.<br />
2 - Option to select which resource to play against<br />
3 - Use Bootstrap-4 and display the details in a card https://getbootstrap.com/docs/4.1/components/card and the winning attribute in badges https://getbootstrap.com/docs/4.1/components/badge
