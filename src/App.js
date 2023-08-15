import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  //setted the counte state with the useState
  const [counte, setCounte] = useState(0);

  //setted the useRef for the button
  const buttonRef = useRef(null);

  //setted the useEffect for the document title with the current counter value by adding the counte state as a dependancie
  useEffect(()=>{
    document.title = `the counter value is ${counte}`
    return
  }, [counte])

  const handleClick = (e) => {
    setCounte(counte + 1)
    buttonRef.current.focus()
  }

  return (
    <div className="App">
    {/*setted the onClick event to the the function that settes the counte state*/}
    <button type="submit" ref={buttonRef} onClick={handleClick}><p>Increament counter</p></button>
    </div>
  );
}

export default App;
