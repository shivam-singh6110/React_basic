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
  const handleUpClick1 = () =>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClear = () =>{
    let newText="";
    setText(newText);
  }
  const [text,setText] = useState('');   
  // text="new text";  wrong way to change the state
  // setText("New text");    //correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1> 
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={heandleOnChange}></textarea> 
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleUpClick1}>Convert into Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
 
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}