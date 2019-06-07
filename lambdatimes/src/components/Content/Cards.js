import React from "react";
import Card from "./Card";
import uuid from "uuid/v1";
import propTypes from "prop-types";
const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(elem => (
        <Card key={uuid()} data={elem} />
      ))

      /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      }
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: propTypes.array
};
export default Cards;
