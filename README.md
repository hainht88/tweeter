This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

There are some test cases in ./src/test.js. Just run 'npm test' in cmd then check the results

### Code Structuring

This project is based on React JS and Bootstrap to quickly build the Interface and also interact with Users smoothly. It's also a oppotunity to practise React JS in a real assign task

- App will handle list of messages and get those message via "handleSubmit" function. It's a main point connect other components of this project (there are 4 components and they are navbar, sidebar, content and message). It also help to format these message by "splitMessage" function and pass this array of messages to Content component to display on Interface

- NavBar will save message everytime user enter into the text input. And when they Submit, this component will send back this message via its props which App has already passed

- Content component is a place to put messages to the Interface

- SideBar is added for fun

- Messages only have a function to perform main task that is format messages into separate parts when it comes limit 50 characters

### Dependencies
This project just needs these things to run:
- "bootstrap": "^4.3.1",
- "font-awesome": "^4.7.0",
- "react": "^16.8.6",
- "react-dom": "^16.8.6",
- "react-scripts": "2.1.8"
