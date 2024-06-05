import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const displayUser = async () => {

      try {
        const response = await fetch(url)
        
        if (!response.ok) {
          setIsError(true)
          setIsLoading(false)
          return 
        }
        const data = await response.json()
        console.log(data)
        setUser(data)

      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    displayUser();
  }, [])


  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  const {avatar_url, name, company, bio} = user

  return (
    <div>
      <img style={{ width: "140px", borderRadius: "20px" }}
        src={avatar_url} alt={user.name}
      />
      <h2>{name}</h2>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
