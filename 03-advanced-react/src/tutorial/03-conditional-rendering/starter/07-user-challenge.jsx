import { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  const LogIn = () => {
    setUser({ name: "Getulio" })
  }

  const logOut = () => {
    setUser(null)
  }
  
  return (
    <section>

      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logOut}>log out</button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={LogIn}>log in</button>
        </div>
      )}

      
    </section>
  );
};

export default UserChallenge;
