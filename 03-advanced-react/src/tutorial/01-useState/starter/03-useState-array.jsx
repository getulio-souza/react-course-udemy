import { useState } from 'react';
import { data } from '../../../data.js'

import React from 'react'

function UserStateArray() {
  const [people, setPeople] = useState(data);

  // remove single person
    const removeSinglePerson = (id) => {
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    }

    ///remove everybody
    const removeEverbody = () => {
      setPeople([])
    };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              style={{ padding: "5px" }}
              onClick={() => removeSinglePerson(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "20px", padding: '10px' }}
        type="button"
        onClick={removeEverbody}
      >
        remove all
      </button>
    </div>
  );
}

export default UserStateArray;










// const UseStateArray = () => {

//   const [getUser, setGetUser] = useState();

//   let people = data;
//   console.log(people)
//   let person = ""
//   let emptyArray = []

//   // people.forEach((item) => {
//   //   const getPersonName = item.name
//   //   person = getPersonName
//   // })
  
//   //remove single person
//   const removeSinglePerson = (id) => {
//     const newPeople = people.filter(person => person.id !== id)
//     setGetUser(newPeople)
//   }

//   ///remove everybody
//   const removeEverbody = () => {
//     setGetUser([])
//   };

//   return (
//     <article>
//       <div>
//       <h4>{person}</h4>
//       <button type="button" onClick={removeSinglePerson(people.id)}>remove </button>
//       </div> 
//       <button type='button' onClick={removeEverbody}>remove all</button>
//     </article>
//   );
// };

// export default UseStateArray;
