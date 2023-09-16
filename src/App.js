import Login from './Login';
import Pages from './Pages';
import Signup from './Signup';
// import ShortenURLForm from './ShortenURLForm';

// import './App.css';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path ='/' element ={<Login/>}/>
        <Route path ='/register' element ={<Signup/>}/>
        <Route path ='/page' element ={<Pages/>}/>
        {/* <Route path ='/shortern' element ={<urlShortner/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
