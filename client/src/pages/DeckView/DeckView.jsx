import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./DeckView.css";
import axios from 'axios';

class DeckView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: 'saved term',
        definition: 'saved definition',
        deck: 'saved deck'
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
    this.handleDeck = this.handleDeck.bind(this);
  }
    // ---- code to handle state change
    // --- include update button in card form
    // ----- provide PUT functionality
    handleTerm(event) {
      event.preventDefault();
      this.setState({term: event.target.value})
    }
  
    handleDefinition(event) {
      event.preventDefault();
      this.setState({definition: event.target.value})
    }
  
    handleDeck(event) {
      event.preventDefault();
      this.setState({deck: event.target.value})
    }
  
    // --- PUT functionality to update card
    handleUpdate() {
      let term = this.state.term
      let definition = this.state.definition
      let deck = this.state.deck
      let obj = {
        deck,
        definition,
        term
      }
      axios.put("/updatecard", {
        obj
      })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      })
    }
    
    // --- DELETE functionality
    handleDelete() {
      axios.put("/deletecard", {
        obj
      })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      })
    }
    




  // Deck View to send GET request for deck object
  // - Deck View to render individual cards for each card object returned
  // --- forEach card object, reset State to value properties of obj
  // --- render cardform 

  render () {
    let context = this;
    return (
      <div className='deckview'>
        <h2 className="deckview">Your Current Deck</h2>
        {/* <button  className="deckbutton" onClick={context.handleSubmit}>Deck 1</button>
        <button  className="deckbutton" onClick={context.handleSubmit}>Deck 2</button> */}


        <form className="flashcard">
          <div  className="mb-3">
            <label htmlFor="formGroupExampleInput"  className="form-label">Term</label>
            <input type="text"  className="form-control" id="formGroupExampleInput" placeholder={this.state.term} onChange={(e) => context.handleTerm(event)}/>
          </div>
            
          <div  className="mb-3">
            <label htmlFor="formGroupExampleInput2"  className="form-label">Definition</label>
            <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder={this.state.definition} onChange={(e) => context.handleDefinition(event)}/>
          </div>
            
          <div  className="mb-3">
            <label htmlFor="formGroupExampleInput2"  className="form-label">Deck</label>
            <input type="text"  className="form-control" id="formGroupExampleInput2" placeholder={this.state.deck} onChange={(e) => context.handleDeck(event)}/>
          </div>

          <button  className="deleteButton" onClick={context.handleDelete}>delete card</button>
          <button  className="updateButton" onClick={context.handleUpdate}>update card</button>
        </form>

      </div>
        )  
    }
}

    
export default DeckView;
    
    


















