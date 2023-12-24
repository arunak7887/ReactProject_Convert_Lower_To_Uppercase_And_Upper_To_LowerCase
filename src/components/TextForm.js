import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClcik=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        //alert("You are right");
        setText(newText);
    }
        const handleLoClcik=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        //alert("You are right");
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
  return (
    
   <>

<div className="container my-2">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   <button className="btn btn-primary mx-2 " onClick={handleLoClcik}>Lowercase</button>
    <button className="btn btn-primary" onClick={handleUpClcik}>Uppercase</button>
</div>
<div className='container'>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and{text.length}characters</p>

    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
      
    
  )
}
