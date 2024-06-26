import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);

  const refContainer = useRef(null);
  console.log(refContainer);

  //use useEffect without the dependency array
  useEffect(()=> {
    console.log(refContainer)
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = refContainer.current.value
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input 
          type="text" 
          id="name" 
          className="form-input" 
          ref={refContainer}
          />
        </div>
        <button 
        type="submit" 
        className="btn btn-block"
        >
          submit
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>value : {value}</h1>
        <button onClick={() => setValue(value + 1)} className="btn">
          increase
        </button>
      </div>
    </div>
  );
};

export default UseRefBasics;
