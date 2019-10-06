
## Code-Breaking-Game

This is a 2 player game.

**Introduction**

This is a simple word guessing game. Can also be considered as a party game and a car game. This game has very few and simple rules.
The game, in the most common setting, is played with two players. Player-2 will guess the code-word using feedback received from previous guesses.

**Rules**

First Player chooses the code-word while the other player's objective is to crack the code-word.
player-2 will have limited number of chances to guess the code-word depending on the length of code-word. 
[Chances = 4*length(code-word]


__Whites (w) = No: of letters in the guessed word matching exactly with in the same position with code-word.__

__Blacks  (b) = No: of letters in the code-word that are matching with letters in guessing word but at same position/index.__          
            [**Exclude counting No: of whites while matching blacks**]
            
    
    
            
This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

