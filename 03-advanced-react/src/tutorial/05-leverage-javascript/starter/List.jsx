import Person from "./Person";
import { people } from "../../../data";
import React from 'react'

const List = ({}) => {
  return(
    <div>
      {people.map((person) => {
        return (
          <Person key={person.name}/>
        )
      })}
    </div>
  ) 
}

export default List