import React from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";

class App extends React.Component {
  state = {
    messages: []
  };

  splitMessage = text => {
    const LIMIT_OF_MESSAGE = 50;
    const str = text;
    let messages = [];
    let strArr = str.split(" ");

    if (
      str.length === 0 ||
      strArr.filter(m => m.length > LIMIT_OF_MESSAGE).length > 0
    )
      return ["Invalid Message"];

    if (str.length <= LIMIT_OF_MESSAGE) return [str];

    let numOfMessages = Math.ceil(str.length / LIMIT_OF_MESSAGE); // predict how many messages limited by 50 chars
    let maxIndicatorsStr =
      (numOfMessages + "/" + numOfMessages + " ").length * numOfMessages; // '1000/1000 ' * number of repeating
    let maxStrWithIndicators =
      maxIndicatorsStr + str.length - (numOfMessages - 1); // total string included indicators string

    numOfMessages = Math.ceil(maxStrWithIndicators / LIMIT_OF_MESSAGE); //re-calculate number of message after got total string

    for (let i = 0; i < numOfMessages; i++) {
      let tmpStr = i + 1 + "/" + numOfMessages;
      for (let j = 0; j < strArr.length; j++) {
        if (tmpStr.length + strArr[j].length + 1 <= LIMIT_OF_MESSAGE) {
          tmpStr += " " + strArr[j];
          strArr.shift();
          j--;
        } else {
          break;
        }
      }
      messages.push(tmpStr);
    }

    return messages;
  };

  handleClick = text => {
    const newMessages = this.splitMessage(text);

    if (newMessages[0] === "Invalid Message") {
      alert("Invalid Message");
      return;
    }

    this.setState({
      messages: [...newMessages, ...this.state.messages]
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onClick={this.handleClick} />
        <Content messages={this.state.messages} />
      </React.Fragment>
    );
  }
}

export default App;
