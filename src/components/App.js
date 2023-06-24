
import React,{useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {

  const[number, setNumber] = useState(0)
  const[sum, setSum] = useState(0)

  useEffect(()=>{
      setSum(sum+number)
  },[number])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={e=> setNumber(e.target.value)} />
        <p>Sum: {sum}</p>

    </div>
  )
}

export default App
