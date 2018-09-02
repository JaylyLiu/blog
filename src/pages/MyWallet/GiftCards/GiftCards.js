import React from 'react';
import './GiftCards.css';

class GiftCards extends React.Component{
  state={}
  render() {
    return(
      <div className="giftcards" >
        <div className="giftcards-part1">
          <span className="span1">
            italki Gift Cards
          </span>
          <span className="span2">
            Give the gift of language
          </span>
        </div>
        <div className="giftcards-part2">
          <button type="button" className="button1" >
            BUY A Gift CARD
          </button>
          <p>
            <span className="span3">
              or Redeem Gift Cards
            </span>
          </p> 
          <span className="span4">
            To redeem a gift card, 
            simply copy and paste the code into the box below and submit.
          </span>

          <div className="input-button">
            <input type="text" placeholder="Enter your code" className="input1"/>
            <button type="button" className="button2">
              REDEEM
            </button>            
          </div>

        </div>
        
      </div>

    );
  }
}


export default GiftCards;