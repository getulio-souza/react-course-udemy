import { useState } from "react";

import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form subbimited")

    if (!name) {
      alert("Please, enter the name before submission!");
    } else {
      const fakeId = Date.now();
      const newUser = { id: fakeId, name };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      setName("");
    }
  };

  ///remove user
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
    alert("user removed successfully!");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Users</h3>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <h4> {user.name}</h4>
            <button
              type="submit"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={()=> removeUser(user.id)}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
