import { useState } from "react";

const ErrorExample = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount(count - 1)} className="btn">
        decrease
      </button>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
