import React,{useState} from 'react'
// style={mystyle}

export default function Textform(props) {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [mode, setmode] = useState("Enable Dark Mode");
    // let currMode="light";
    const handleupcase=()=>{
        // console.log("clicked");
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to uppercase","success")
    }
    const handlelocase=()=>{
        // console.log("clicked");
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to lowercase","success")
    }
    const handleClear=()=>{
        // console.log("clicked");
        let newtext="";
        settext(newtext);
        props.showalert("text was cleared","success")
    }
    const handleonchange=(e)=>{
        // console.log("changed");
        settext(e.target.value);
    }
    const modechange=()=>{
        // console.log("clicked");
        if(mystyle.color === "black"){
            setMystyle({
                color: "white",
                backgroundColor: "black",
                // border: "1px solid white",
            })
            setmode("Enable Light Mode")
        }else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setmode("Enable Dark Mode")
        }
        
        }
    

    const [text, settext] = useState("");
  return (
    <>
        <div className='container' style={mystyle}>
            <h1 style={mystyle}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange}id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleupcase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelocase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>       
            <button type="button" className="btn btn-primary mx-1" onClick={modechange}>{mode}</button>   
        </div>
        <div className="container my-3" style={mystyle}>
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preveiw</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
