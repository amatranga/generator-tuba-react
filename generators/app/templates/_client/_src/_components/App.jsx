import React from 'react';

// class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello from the App component!'
    }
    this.someFunction = this.someFunction.bind(this);
  }

  someFunction(event) {
    event.preventDefault();
    console.log('Click!')
  }

  componentWillMount() {
    console.log('App component mounted!');
  }

  render() {
    return (
      <div className="container">
        <h3 className="col text-center">
          {this.state.text}
        </h3>
        <p className="col text-center">Open your developer tools and click the button!</p>
        <button className="btn btn-primary col justify-content-center" onClick={this.someFunction}>Click Me!</button>
      </div>
    );
  }
}

// Functional component

// const App = (optionalProps) => {
//   return (
//     <div className="row text-center">
//       <h3>Functional App Component</h3>
//     </div>
//   );
// }

export default App;
