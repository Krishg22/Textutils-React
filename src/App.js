import React,{useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  const [alert,setAlert]= useState(null);
  const showalert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <Navbar tittle="Textutils"/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Textform showalert={showalert} heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
