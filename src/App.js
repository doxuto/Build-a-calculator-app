
import {useState} from "react"; 

import './App.css';

function App() {

  const [result, setResult] = useState(""); 
  const ops=['*','-','+','/'];
 
const val= (e)=>{
  e.preventDefault();

  let value = e.target.name; 
  if(
    ops.includes(value) && result === "" || 
    ops.includes(value) && ops.includes(result.slice(-1))
  ){
    return;
  }
  setResult(result.concat(e.target.name));

  
}

const clear= (e)=>{
  e.preventDefault(); 
  setResult("");
  
}
const del= (e)=>{
  e.preventDefault(); 
  setResult(result.slice(0,result.length-1));
  
}
const cal= (e)=>{
  e.preventDefault(); 
  setResult(eval(result).toString());
  
}

  return (
    <div className="App">     
      <div className='heading'> 
        <h1>Simplest Working Calculator</h1> 
      </div>
      <div className='cal'>
        <div className='screen' placeholder="0">
        {result ? <span> </span> :<span>0</span>} 
         {result}
        </div> 
        <form className='operator'> 
        {/* <textarea rows="5" cols="60" type="text" placeholder="0" value={result}></textarea> */}

        {/* <input placeholder="0" rows="5" cols="60"  type="text" value={result}/> */}

          <button  onClick={clear} className='horizontal span-2' >Ac</button> 
          <button  onClick={del} className='horizontal'  >c</button>
          <button name="/" onClick={val} >&divide;</button>
          <button name="7" onClick={val} className='number'  >7</button>
          <button name="8" onClick={val} className='number' >8</button>
          <button name="9" onClick={val} className='number'>9</button>
          <button name="*" onClick={val} >*</button>
          <button name="4" onClick={val} className='number'>4</button>
          <button name="5" onClick={val} className='number'>5</button>
          <button name="6" onClick={val} className='number'>6</button>
          <button name="-" onClick={val}>-</button>
          <button name="1" onClick={val} className='number'>1</button>
          <button name="2" onClick={val} className='number'>2</button>
          <button name="3" onClick={val} className='number'>3</button>
          <button name="+" onClick={val} >+</button>
          <button name="0" onClick={val} className='span-2 number' >0</button>
          <button name="." onClick={val} className='number'>.</button>
          <button  onClick={cal} className='number'>=</button>

      </form> 
      </div>
      
    </div> 
  ); 
} 

export default App;
