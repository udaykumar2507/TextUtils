import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success");
    }
    const handlelowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to Lowercase","success");
  }
  const handleClearText=()=>{
    let newtext='';
    setText(newtext)
    props.showAlert("Text Cleared","success");
  }
  const handleCopy=()=>{
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed","success");
  }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}onChange={handleOnChange} rows="5"></textarea>
</div>
<button className='btn btn-Primary ' onClick={handleUpClick}>Covert to Uppercase</button>
<button className='btn btn-Primary mx-2' onClick={handlelowClick}>Covert to Lowercase</button>
<button className='btn btn-Primary mx-2' onClick={handleClearText}>Clear</button>
<button className='btn btn-Primary mx-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-Primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<div className='conatiner my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something in the above TextBox to preview here"}</p>
</div>
</div>
</>
  )
}
