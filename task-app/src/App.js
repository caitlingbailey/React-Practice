import { uniqueId } from "lodash";
import React from "react";
import uniqid from "uniqid";
import Overview from './components/Overview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: "",
        id: uniqueId()
      },
      tasks: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // alert("A new task was added:" + {event.target.value})
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid()
      },
    })
  }

  handleChange = (event) => {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
      },
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <h1>Tasks</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Task:</label>
          <input 
          type="text" 
          id="taskInput"
          name="task" 
          value={task.test}
          onChange={this.handleChange}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
