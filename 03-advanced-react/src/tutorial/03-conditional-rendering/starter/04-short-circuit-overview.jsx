import { useEffect, useState } from 'react';

const ShortCircuitOverview = () => {

  const [text, setText] = useState("")
  const [name, setName] = useState("susan")

  const codeExample = text || "hello world"

  return (
    <section>
      <h4>falsy OR: {text || "hello world"}</h4>
      <h4>falsy AND: {text && "hello world"}</h4>
      <h4>truthy OR: {name || "hello world"}</h4>
      <h4>truthy AND: {name && "hello world"}</h4>
      {codeExample}
    </section>
  );
};
export default ShortCircuitOverview;
