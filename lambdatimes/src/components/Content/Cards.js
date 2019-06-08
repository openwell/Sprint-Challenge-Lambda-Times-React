import React from "react";
import Card from "./Card";
import uuid from "uuid/v1";
import propTypes from "prop-types";
import "../../CSS/index.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Cards = props => {
  return (
    <TransitionGroup className="cards-container">
      {props.cards.map(elem => (
        <CSSTransition key={uuid()} classNames="fade" timeout={500}>
          <Card key={uuid()} data={elem} />
        </CSSTransition>
      ))
      /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      }
    </TransitionGroup>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: propTypes.array
};
export default Cards;
