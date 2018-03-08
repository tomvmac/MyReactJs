import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/* 
Description: Card component is a function component, which does not hold state like class components do.  
Main function: Card component is to display a card with github avatar, name and company information 
*/
const Card = (props) => {
  return (
    <div>
      <img width="75" src={props.avatar_url} />
      <div>
        <div>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
};

// let data = [
//   {
//     name: "Paul O'Shannessy",
//     avatar_url: "https://avatars3.githubusercontent.com/u/8445?v=3",
//     company: "Facebook"
//   },
//   {
//     name: "Ben Alpert",
//     avatar_url: "https://avatars3.githubusercontent.com/u/6820?v=3",
//     company: "Facebook"
//   }
// ]


const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  )
}

class Form extends React.Component {

  state = { userName: '' }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event: Form Submit", this.state.userName);

    fetch("https://api.github.com/users/" + this.state.userName)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("result", result);
        this.props.onSubmit(result);
        this.setState({userName: ''})
      },
      (error) => {
        console.log("error", error);
      }
    )
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username" required />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}


class App extends Component {

  state = {
    cards: [
      {
        key: 1,
        name: "Paul O'Shannessy",
        avatar_url: "https://avatars3.githubusercontent.com/u/8445?v=3",
        company: "Facebook"
      },
      {
        key: 2,
        name: "Ben Alpert",
        avatar_url: "https://avatars3.githubusercontent.com/u/6820?v=3",
        company: "Facebook"
      }
    ]
  }

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Git Card App</h1>
        </header>

        <Form onSubmit={this.addNewCard} />

        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
