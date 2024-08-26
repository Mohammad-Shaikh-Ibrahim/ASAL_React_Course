import { useState } from "react";

export default function Player({initialName ,symbol}){
    const [playerName,setPlayerName]= useState(initialName)
    const [isEditing,setIsEditing]= useState(false);
    
    function handleEditClick(){
        // setIsEditing(true); at this case we done save the new value
        // setIsEditing(isEditing ? false :true) this way is correct but the next way is easier
        // setIsEditing(!isEditing) but in these ways we cant update the value so we want a function to update it
        setIsEditing((editing)=>!editing)//best practice for update
    }

    function handelChange(event){
        setPlayerName(event.target.value)
    }

    let editableplayerName= <span className="player-name">{playerName}</span>
    // let btnCaption= "Edit"; Way one to convert between Save and Edit

    if(isEditing){
        editableplayerName= <input type="text" value={playerName} required onChange={handelChange}/>
        // btnCaption="Save"; Way one to convert between Save and Edit
    }

    return(
        <li>
        <span className="player">
          { editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        {/* <button onClick={handleEditClick}>{btnCaption}</button> //Way one to convert between Save and Edit */}
        <button onClick={handleEditClick}>{isEditing? "Save" : "Edit"}</button>{/*Way 2 to convert between Save and Edit uing ternary operator */}
      </li>
    );
}