import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    try {
      const getUsers = async () => {
        const response = await fetch(url)
        console.log(`response:`,response);
 
        const data = await response.json()
        console.log(`data:`,data)
        setUsers(users)
     };
      getUsers()
      console.log("get users successfully!")
      
    } catch (error) {
      console.log("failed to get users")
    }

  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
      {users.map((user) => {
        const [id, login, avatar_url] = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>{user.login}</a> 
            </div>
          </li>
        );
      })}
      </ul>
    </section>
  );
};
export default FetchData;
