## Screenshots

<img width="1434" alt="StarWars App 1" src="https://user-images.githubusercontent.com/4697967/153756729-0aae13d6-f640-452d-8af2-db573913bd7a.png">


<img width="1434" alt="StarWars App2" src="https://user-images.githubusercontent.com/4697967/153756742-4b9d1473-66f6-4de9-afe2-feab5776db9b.png">


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm build`

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
