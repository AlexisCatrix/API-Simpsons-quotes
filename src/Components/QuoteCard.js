import React from "react";
import '../QuoteCard.css';


export default function QuoteCard({quote}) {
  return (
    <div className="QuoteCard">
      <img src={quote.image} alt={quote.character}></img>
      <div id="quoteCharacter">
        <div>{quote.quote}</div>
        <cite id="quote">{quote.character}</cite>
      </div>
    </div>
  );
}
