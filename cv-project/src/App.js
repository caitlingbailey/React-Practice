import React, { useState } from "react";
import Input from './components/Input';
import Display from './components/Display';
import useSubmitForm from "./hooks/useSubmitForm";

function App() {
  const [profile, setProfile] = useState({});

  const signup = () => {
    alert(`User created!`)
    setProfile({status: "created"})
    console.log(profile)
  }

  const {inputs, handleInputChange, handleSubmit} = useSubmitForm(signup);

  return (
    <div className="App">
      <Input
        handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit}
        inputs = {inputs}
      />
      <Display 
        profile={profile}
      />
    </div>
  );
}

export default App;
