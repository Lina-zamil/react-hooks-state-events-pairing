import React from "react";

function Button ({vote,handleVoteChange,emoji}){
return(
    <>
      <button onClick={handleVoteChange}> {emoji}{vote} </button>    
    </>
);
}
export default Button;