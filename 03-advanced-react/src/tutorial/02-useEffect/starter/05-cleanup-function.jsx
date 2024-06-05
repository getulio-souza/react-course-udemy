import { useEffect, useState } from "react";

// const CleanupFunction = () => {

//   const [toggle, setToggle] = useState(false)

//   //first component
//   const FirstComponent = () => {
//     setToggle(true)
//     return (
//       <div>
//         <h4>First component</h4>
//       </div>
//     )
//   }
  
//   //second component
//   const SecondComponent = () => {
//     useEffect(() => {
//       setToggle(null)
//     }, [])
//   }
  

//   return (
//     <div>
//       {toggle ? <FirstComponent/> : <SecondComponent/> }
//     </div>
//   )
// };

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  //this function returns a button which triggers the cleanup logic

  return (
    <div>
      <button className="btn" onClick={()=> setToggle(!toggle)}>toogle component</button>
      {toggle && <RandomComponent/>}
    </div>
  )
};

const RandomComponent = () => {
  //use effect always have two arguments: the callback function and the dependency array
  useEffect(() => {
    console.log("hello there")
  }, []);
  return (
    <div>
      <h1>hello there</h1>
    </div>
  )
  }


export default CleanupFunction;
