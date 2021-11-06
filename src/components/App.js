import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [curr, setCurr] = useState(0);
  const len = props.slides.length;
  return (
    <>
      <div className="container">
        <h1 data-testid="title">{props.slides[curr].title}</h1>
        <p data-testid="text">{props.slides[curr].text}</p>

      </div>

    
    {/* <h2>{props.slides.length}</h2> */}
    
    {
      curr - 1 !== -1 ? <button onClick={()=>curr - 1 === -1 ? setCurr(0) : setCurr(curr-1)} data-testid="button-prev">Previous</button> : <button data-testid="button-prev" disabled>Previous</button>
    }
    
    {
      curr + 1 !== len ? <button onClick={()=>curr + 1 === len ? setCurr(len-1) : setCurr(curr+1)} data-testid="button-next">Next</button> : <button data-testid="button-next" disabled>Next</button>
    }


    {
      curr !== 0 ? <button onClick={()=>setCurr(0)} data-testid="button-restart">Restart</button> : <button data-testid="button-restart" disabled>Restart</button>
    }


    </>
  )
}


export default App;
