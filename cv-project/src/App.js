import React, { useState } from "react";
import Input from './components/Input';
import Display from './components/Display';

function App() {
  // const [profile, setProfile] = useState(null)
  return (
    <div className="App">
      <Input />
      <Display />
    </div>
  );
}

export default App;
