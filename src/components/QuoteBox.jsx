import React from "react";
import data from "../json/queotes.json";
import generateNewColor from "../tools/generateNewColor";

const QuoteBox = ({ randomColor }) => {
  const random = Math.floor(Math.random() * data.length);
  const auxObj = data[random];

  const color = generateNewColor();
  const bgContainer = {
    backgroundColor: color,
  };
  const colorLetter = {
    color: color,
  };

  return (
    <article style={bgContainer}>
      <div className="card_info" style={colorLetter}>
     
        <p> <i class="fa-solid fa-quote-left"></i>{auxObj.quote}</p>
        <div className="card_autor">
          <b>{auxObj.author}</b>
          <div className="card_icon-next" style={bgContainer}>
            <box-icon
              onClick={randomColor}
              name="right-arrow-alt"
              color={generateNewColor()}
            ></box-icon>
          </div>
        </div>
      </div>
    </article>
  );
};

export default QuoteBox;