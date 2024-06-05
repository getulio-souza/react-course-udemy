import { useState } from 'react';


const UseStateObject = () => {
  
  const [person, setPerson] = useState({
    name: "Getulio",
    age: 32,
    hobby: "play video games"
  })

  const displayPerson = () => {
    setPerson({ name: "peter", age: 29, hobby: "watching tv" })
    setPerson({...person, name: "john"})
  }



  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys to: {person.hobby}</h3>
      <button className='btn' onClick={displayPerson}>show john</button>
    </>
  );
};

export default UseStateObject;
