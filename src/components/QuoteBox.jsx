import React, { useState } from "react";
import data from "../json/queotes.json";
import generateNewColor from "../tools/generateNewColor";
import NextIcon from "./NextIcon";

const QuoteBox = () => {
  const random = Math.floor(Math.random() * data.length);
  const auxObj = data[random];
  const [colors, setColor] = useState(0);
  const randomColor = () => {
    setColor(generateNewColor());
  };

  const color = generateNewColor();
  const bgContainer = {
    backgroundColor: color,
  };
  const colorLetter = {
    color: color,
  };

  return (
    <main style={bgContainer}>
      <section className="card_info" style={colorLetter}>
        <p>
          {" "}
          <i class="fa-solid fa-quote-left"></i>
          {auxObj.quote}
        </p>
        <article className="card_autor">
          <b>{auxObj.author}</b>
          <div className="card_icon-next" style={bgContainer}>
            <NextIcon randomColor={randomColor} color={generateNewColor()} />
          </div>
        </article>
      </section>
    </main>
  );
};

export default QuoteBox;
