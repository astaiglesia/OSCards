/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router';
import Header from "./components/Header";
import AddCard from "./pages/AddCard";
import DeckView from "./pages/DeckView";


// ### implement React-Router to render between AddCard and DeckView

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>

//         <Router>
//           <Route exact path="/" component={AddCard}/>
//           <Route path="/deckview" component={DeckView}/>
//         </Router>
        

//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <AddCard/>
        <DeckView/>

        

      </div>
    )
  }
} 

export default App;
