import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); 
    // setText("You have clicked on handleUpClick");
  }
  const heandleOnChange = (event) =>{
    // console.log("On change"); 
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here');   
  // text="new text";  wrong way to change the state
  // setText("New text");    //correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1> 
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={heandleOnChange}></textarea> 
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert into Uppercase</button>
    </div>
  )
}
