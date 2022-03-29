import React from 'react';
import { useState } from 'react';
import Output from './Output';

const Greeting = () => {

  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <div>
        <h2>Hello World</h2>
        {/* <p>It's good to see you!</p> */}
        {/* {!changedText && <p>It's good to see you!</p>} */}
        {!changedText && <Output>It's good to see you!</Output>}
        {/* {changedText && <p>Changed!</p>} */}
        {changedText && <Output>Changed!</Output>}
        <button onClick={changeTextHandler}>Change text!</button>
    </div>
  )
}

export default Greeting