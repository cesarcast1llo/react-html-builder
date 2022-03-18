import React from 'react';
import './Styles/Styles.css';
import Data from './local-json/example2.json';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // fetch(Data)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          loaded: true,
        });
      });
  }
  render() {
    const { loaded, items } = this.state;
    if (!loaded)
      return (
        <div>
          <h1>Email is gathering Data..</h1>
        </div>
      );

    return (
      <div className="App">
        {Data &&
          Data.map(({ name, id }) => (
            <div key={id} className="row">
              <strong>{name}</strong>
            </div>
          ))}
        <h1> Fetch Data from an api in react </h1>
        {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:
            {item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
