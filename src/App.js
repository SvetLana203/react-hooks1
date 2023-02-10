
import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("JavaScript");

  const updateData = () => {
   if (text === "JavaScript") {
    setText("React")
   }
   else {
    setText("JavaScript")
   }
  }
  return(
    <div>
      <h1>I love {text}</h1>
      <button onClick={updateData}>Click</button>

    </div>
  )
}

export default App;
