import React, { useState } from 'react';
import ToDoList from './ToDoList'; 

const App=()=>{
  const[inputList,setInputList]=useState('');
  const[items,setItems]=useState([]);
  const itemEvent=(event)=>{ 
    setInputList(event.target.value);

  } 
  const ListofItems=()=>{
        setItems((oldItems)=>{
          return[...oldItems,inputList];
        })
  }
  return(
    <> 
    <div className='main_div'>
      <div className='center_div'>
      <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type='text'placeholder='Add a items' onChange={itemEvent}></input> 
        <button onClick={ListofItems}>+</button> 
        <ol>
          {/* <li>{inputList}</li> */}
          {
            items.map( (itemval) => {
          return(<ToDoList text={itemval} 
          ></ToDoList>) 
          
          })
          }

          

        </ol>
      </div>
    </div>
    </>
  )
};
export default App;
