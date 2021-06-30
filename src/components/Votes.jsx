import React, {useState} from "react";
import '../App.css';

function Votes() {
  const [disabled, setDisabled] = useState(false);
  const numbers = [0, 1/2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30];

  const vote = (number) => {
    console.log(number);
    disable();
  }

  function disable() {
    setDisabled(true);
    console.log('Disabled');
  }

  const listItems = numbers.map((number) =>
    <li key={number}>
      <button disabled={disabled} onClick={() => vote(number)}>{number}</button>
    </li>
  );

  return (
    <div className="wrapper-votes">
      <h4>Choose your card</h4>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Votes;