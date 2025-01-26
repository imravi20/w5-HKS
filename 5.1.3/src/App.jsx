import { useState,Component } from 'react'
import './App.css'

function App() {
  const [todos,setTodos]=useState([
      {
        title: "Gym",
        description: "Go to gym from 5-7",
        completed: false,
      },
      {
        title: "Shopping",
        description: "Buy groceries for the week",
        completed: false,
      },
      {
        title: "Read Book",
        description: "Finish reading React documentation",
        completed: true,
      },
      {
        title: "Work on Project",
        description: "Complete feature for the app",
        completed: false,
      },
      {
        title: "Clean Room",
        description: "Tidy up bedroom and organize closet",
        completed: true,
      },
      {
        title: "Study for Exams",
        description: "Revise for the upcoming exams",
        completed: false,
      },
      {
        title: "Cook Dinner",
        description: "Prepare a healthy meal for dinner",
        completed: false,
      },
      {
        title: "Meeting with Team",
        description: "Discuss project progress in the team meeting",
        completed: true,
      },
      {
        title: "Check Email",
        description: "Go through important emails and respond",
        completed: false,
      },
      {
        title: "Walk the Dog",
        description: "Take the dog out for a walk in the park",
        completed: true,
      }
    ]);

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo)=>{
        return <ShowTodo title={todo.title} description={todo.description} completed={todo.completed} setTodos={setTodos}></ShowTodo>
      })
    }
      </div>
  )
}

class ShowTodo extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <h2>Title : {this.props.title}</h2>
        <h2>Description: {this.props.description}</h2>
        <br></br>
      </div>
    )
  }
}

export default App
