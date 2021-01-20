import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    value:'',
    inputItems:[]
  }

handleChange = (value) => {
  this.setState({value})
}
submitItem = () =>{
  let inputItems = [...this.state.inputItems]
  inputItems.push(this.state.value);
  this.setState({inputItems, value:''});
}
clearList = () =>{
  this.setState({ inputItems:[], value:''})
}
clearOneItem = (index) =>{
  let inputItems = [...this.state.inputItems]
  inputItems.splice(index,1);
  this.setState({inputItems});
}

  render(){
    const {inputItems,value} = this.state;
    console.log(inputItems);
     return(
    <div className = 'main-div'>
      <div className = 'center-div'>
          <h2> To do list</h2>
          <input type='text' placeholder='Add a item' value = {value} onChange={(e) => this.handleChange(e.target.value)} />
          <button onClick={()=> this.submitItem()}>+</button>
          <ol>
          {inputItems.map((item,index) => {
            return (
              <li>
           <button className = 'clearOneItem' onClick = {() => {this.clearOneItem(index)}}>-</button>
             {item}
              </li>
              );
          })}
          </ol>
          <button className = 'elipse-btn' onClick = { () => this.clearList()}>Clear</button>
      </div>
    </div>  
   );
  }
};

export default App;