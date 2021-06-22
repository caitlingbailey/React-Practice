import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  return (
    <div className="App">
      <div>
        {count}
      </div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
