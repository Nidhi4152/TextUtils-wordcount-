
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpercaseClick = ()=>{
    console.log("upercase was click" + text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    // your logic here
    console.log("upercase was click" + text);
    let newText=text.toLowerCase();
    setText(newText)
  };
  const handleronChange= (event)=>{
    console.log("onChange");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>  
<div className="mb-3">
  <label htmlFor="mybox" class="form-label"></label>
  <textarea className="form-control"  value={text} onChange={ handleronChange} id="mybox" rows="10"></textarea>
</div>
<button className="btn.btn.primary mx-2"onClick={handleUpercaseClick}>Convert to Uppercase</button>
<button className="btn.btn.primary mx-2"onClick={handleLoClick}>Convert toLowercase</button>
    </div>
    <div className="container" my-3>
<h1>your text summery</h1>
<p>{text.split(" ").length} word and {text.length} characters</p>
{/* <p>{0.008*text.split(" ").length} Mintues read</p> */}
<button><p>{0.008*text.split(" ").length} Mintues read</p></button>
<h2>preview</h2>
<p>{text}</p>
    </div>
    </>
  )
}
