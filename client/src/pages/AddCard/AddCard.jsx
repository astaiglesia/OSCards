import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./AddCard.css";
import axios from 'axios';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: '',
        definition: '',
        deck: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
    this.handleDeck = this.handleDeck.bind(this);
  }

  // helper functions to handle entries
  // function to setState of term on field entry
  handleTerm(event) {
    event.preventDefault();
    this.setState({term: event.target.value})
  }

  // function to setState of definition on field entry
  handleDefinition(event) {
    event.preventDefault();
    this.setState({definition: event.target.value})
  }

  // function to setState of deck on field entry
  handleDeck(event) {
    event.preventDefault();
    this.setState({deck: event.target.value})
  }
  
  // provide onclick POST functionality to submit button
  // - function to instantiate an object consisting of data from state object
  // --- term
  // --- definition 
  // --- deck
  // - POSt object to route /card
  handleSubmit() {
    let term = this.state.term
    let definition = this.state.definition
    let deck = this.state.deck
    let obj = {
      deck,
      definition,
      term
    }

    axios.post("/card", {
      obj
    })
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    })
  }

  // render add card component consisiting of a heading, input fields and submit button
  render () {
    let context = this;
    return (
        <div className='addcard'>
        {/* // card form h2 "CARD FORM" */}
        <h2 className="addcard">Create A New Flash Card</h2>

        {/* create a card entry field with three inputs */}
        <form className="cardform">
            <div  className="mb-3">
              <label htmlFor="formGroupExampleInput"  className="form-label">Term</label>
              <input type="text"  className="form-control" id="formGroupExampleInput" placeholder="YetiCrab" onChange={(e) => context.handleTerm(event)}/>
            </div>
            
            <div  className="mb-3">
              <label htmlFor="formGroupExampleInput2"  className="form-label">Definition</label>
              <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder="Kiwa hirsuta is a crustacean discovered in 2005 in the South Pacific Ocean. This decapod, which is approximately 15 cm long, is notable for the quantity of silky blond setae covering its pereiopods. Its discoverers dubbed it the yeti lobster or yeti crab" onChange={(e) => context.handleDefinition(event)}/>
            </div>
            
            <div  className="mb-3">
              <label htmlFor="formGroupExampleInput2"  className="form-label">Deck</label>
              <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder="Crustaceans" onChange={(e) => context.handleDeck(event)}/>
            </div>
        </form>

        {/* submit button to provide onclick functionality sending data entry object to backend for storage */}
        <button  className="submitButton" onClick={context.handleSubmit}>+</button>
        </div>
            )  
        }
    }

export default AddCard;


