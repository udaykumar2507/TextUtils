
import NavBar from './Components/NavBar';
import './App.css';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter, Route, Routes  } from 'react-router-dom'; 
function App() {
  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
      </div>
  </>
  );
}
export default App;
