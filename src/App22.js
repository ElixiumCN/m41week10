import React from 'react';
import './App.css';
import Box from './components/box';
import {useState} from 'react';

function App() {
    const [user, setUser] = useState();
    const [age, setAge] = useState();
  // as much JS before the return as you want
  // ordinary JS
  // No if statements - they cause a re-render
  // npm start - start react app

  return (
    <div className="App">
      <input onChange={(event) => setUser(event.target.value)} />
      <input onChange={(event) => setAge(event.target.value)} />
      <h1>Elon Musk</h1>
      // pass through name to component? PROPS
      <Box name="George" age="17" />
      <Box name="Fred" age="15" />
      <Box name={user} age={age} />
    </div>  
  );
}

export default App;


{/* 
return (
    <div className="App">
    <input onChange={(event) => setUser(event.target.value)}/>
    <input onChange={(event) => setAge(event.target.value)}/>
    {user ? <div>
        <h1>Harry Potter</h1>
    <Box name="George Weasley" age="17" />
    <Box name="Hermione Grainger" age="15" />
    <Box name="Rubeus Hagrid" age="47" />
    <Box name={user} age={age} />
    </div>
    :<div>
        <h1>This is the else part of the statement</h1>
        </div>}
    </div>
);
} */}

// for (let i=0; i< array.length; i++) 
//     console.log(array[i])


// map function is identical to a for loop for arrays
// map function is easier than for loops in React




