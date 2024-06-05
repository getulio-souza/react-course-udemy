import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('k');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h4>{text || "default name"}</h4>
      <h4>
        {!text && (
          <div>
            <h5>whatever value</h5>
            <h5>whatever value 2</h5>
          </div>
        )}
      </h4>
      {user && <SomeComponent name={user.name} />}
      <h3 style={{margin: "10px 0"}}>Ternary Operator</h3>
      <button className='btn'>{isEditing ? "edit" : "add"}</button>
      {user ? <div><h4>Hello there</h4></div> : <div><h5>you need to log in</h5></div>}
    </div>
  );
};

const SomeComponent = ({name}) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuitExamples;
