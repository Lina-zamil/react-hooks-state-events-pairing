import React, { useState } from "react";
import video from "../data/video";
 

function Comment({comment,length  }){
 const[commentStatus,setCommentStatus]=useState(false)
 const[likes,setLikes]=useState(0)
 const[dislikes,setDisikes]=useState(0)
  
  
 function handleCommentStatusChange(){
 setCommentStatus((comment)=>!comment)
 }

 function handleLikesChange(){
   setLikes((like)=>like+1)
  }
 
  function handleDislikesChange(){
   setDisikes((dislike)=>dislike+1)
  }

  

return(
<>
<button value={comment} onClick={handleCommentStatusChange}>{commentStatus?"Hide":"Show"} Comments</button><br/><br/>
{commentStatus?(
   <>
   <hr/>
  <h3>{length} Comments</h3>
   {video.comments.map((el)=>{
    return(
       <div key={el.id}>
       <h4>{el.user}</h4>
        <p>{el.comment}</p>
        <button   onClick={handleLikesChange}>{likes} 👍</button>
        <button   onClick={handleDislikesChange}>{dislikes} 👎</button> 
        </div>)})}
         
 </>
):null}
 
</>
);
}
export default Comment;
