import React from "react";

const NextIcon = ({ randomColor, color }) => {
  return (
    <>
      <box-icon
        onClick={randomColor}
        name="right-arrow-alt"
        color={color}
      ></box-icon>
    </>
  );
};

export default NextIcon;
