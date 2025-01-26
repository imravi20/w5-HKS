import React,{ useState } from 'react'
import './App.css'

function App(){
  const [count,setCount]=useState(0);

  function updateCount(){
    setCount(count+1);
  }

  return (
    <div>
      <button className="card" onClick={updateCount}>Count is {count}</button>
      <Button count={count} setCount={setCount}></Button>
      <Button count={count*2} setCount={setCount}></Button>
      <Button1 count={count} setCount={setCount}></Button1>


    </div>
  )
}

function Button(props){
  return (
    <div>
      <button className='card' onClick={()=>{props.setCount(props.count+1)}}>Count is {props.count}</button>
    </div>
  )
}

class Button1 extends React.Component{
  constructor(){
    super();
  }
  updateCount() {
    this.props.setCount(this.props.count+1);
  }
  render (){
    return(
      <div>
        <button className='card' onClick={()=>{this.updateCount()}}>Count is {this.props.count}</button>
      </div>
    )
  }
} 

export default App
