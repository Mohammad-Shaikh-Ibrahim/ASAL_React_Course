import {useState,useRef} from 'react'

export default function Player() {
  const playerName =useRef();
  const [enteredPlayerName,setEnteredPlayerName]=useState(null);
  // const [submitted,setSubmitted]=useState(false);

  // function handelChange(event){
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handelClick(){
    setEnteredPlayerName(playerName.current.value); // to save the currunt name while typing
    playerName.current.value= ''; // to clean entry after click button
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}
         {/* {submitted? enteredPlayerName: 'unknown entity'} */}
        {/*??=> {enteredPlayerName? enteredPlayerName: 'unknown entity'} */}
        </h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        // onChange={handelChange} 
        // value={enteredPlayerName}
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
