import { useState } from "react";

const App = () => {

  const [username, setUsername] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} >
        <input onChange={(e) => {
          setUsername(e.target.value);
        }} value={username} type="text" placeholder='Enter your name' />
        <button >submit</button>
      </form>
    </div>
  )
}

export default App
