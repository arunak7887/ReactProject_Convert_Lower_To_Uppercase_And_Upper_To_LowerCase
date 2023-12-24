import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return(
    <>

    <Navbar title="text" aboutText="About Text"></Navbar>
  
  {/*
  <Navbar/>
  */}
  <div className='container'>
  <TextForm heading="Enter the text to  analize"></TextForm>
 {/* <button className='btn btn-primary'>Convert To Uppercase</button>*/}
  </div>
  

    </>
 
  );

  
}

export default App;
