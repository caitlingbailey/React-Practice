function Input() {
    function renderTextField(name) {
        return (
            <input type="text" name={name} placeholder={name.toUpperCase()} />
        )
    }

    function handleSubmit() {
        console.log("Submit!")
    }

    return (
      <div className="input">
          <div className="information-input">
              <form onSubmit={handleSubmit()}>
                <div id="personal-information">
                    <h2>Personal Information</h2>
                    {renderTextField("first name")}
                    {renderTextField("last name")}
                    {renderTextField("title")}
                    <textarea value="ADDRESS" />
                    {renderTextField("phone")}
                    {renderTextField("email")}
                    {renderTextField("description")}
                </div>
                <div>
                    <h2>Education Information</h2>
                    {renderTextField("university")}
                    {renderTextField("city")}
                    {renderTextField("degree")}
                    {renderTextField("subject")}
                    {renderTextField("from")}
                    {renderTextField("to")}
                </div>
                <div>
                    <h2>Experience</h2>
                    {renderTextField("position")}
                    {renderTextField("company")}
                    {renderTextField("city")}
                    {renderTextField("from")}
                    {renderTextField("to")}
                </div>
                <input type="submit" value="Submit" />
              </form>
          </div>
      </div>
    );
  }
  
  export default Input;
