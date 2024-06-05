import { useState } from "react";

const ToggleChallenge = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <button
        className="btn"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={()=> setShowContent(!showContent)}
      >
        {showContent ? "hide content" : "show content"}
      </button>
      {showContent ? <MyContent/> : null}
    </div>
  );
};

const MyContent = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        exercitationem numquam laboriosam adipisci delectus vitae itaque
        quisquam animi! Nostrum, dolore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
        exercitationem numquam laboriosam adipisci delectus vitae itaque
        quisquam animi! Nostrum, dolore.
      </p>
    </div>
  );
};

export default ToggleChallenge;
