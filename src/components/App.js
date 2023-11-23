import { useState } from "react";
import video from "../data/video.js";
import Comment from "./Comment.js"
import Button from "./Button.js";
function App() {
  console.log("Here's your data:", video);

  const[upVote,setUpVote]=useState(video.upvotes)
  const[downVote,setDownVote]=useState(video.downvotes)
 
 function handleUpVoteChange(){
  setUpVote((vote)=>vote+1)
 }
 function handleDownVoteChange(){
  setDownVote((vote)=>vote+1)
 }
 
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1> {video.title} </h1>
      <p>{video.views} views | Uploaded {video.createdAt}</p>
      <Button vote={upVote}   handleVoteChange={handleUpVoteChange} emoji="👍"/> 
      <Button vote={downVote} handleVoteChange={handleDownVoteChange} emoji="👎"/> 
      <br/>
      <br/>
      <Comment key={video.comments.id} user={video.comments.user}
       comment={video.comments.comment} length={video.comments.length}
       
      />
    </div>
  );
}

export default App;
