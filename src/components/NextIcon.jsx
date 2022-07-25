import React from 'react'
import generateNewColor from "../tools/generateNewColor";

const NextIcon = ({randomColor}) => {
 
  return (
    <>      <box-icon
    onClick={randomColor}
    name="right-arrow-alt"
    color={generateNewColor()} 
  ></box-icon> 
    </>
    
  )
}

export default NextIcon