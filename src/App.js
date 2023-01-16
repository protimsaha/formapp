import { useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import FormPage from './components/FormPage';
import ResultPage from './components/ResultPage';

function App() {

  const [name,setName]= useState(undefined)
  const [sectors,setSectors]= useState(null)
  const [agree,setAgree]= useState(null)

  return (
    <div className='container mx-auto lg:px-28 sm:px-12 px-6'>
      
        <Routes>
          <Route path='/' element={<FormPage name={name} setName={setName} sectors={sectors} setSectors={setSectors} agree={agree} setAgree={setAgree}/>}></Route>
          <Route path='/result' element={<ResultPage name={name} sectors={sectors} agree={agree}/>}></Route>
          </Routes> 
    
    </div>
  );
}

export default App;
