import React,{useState} from 'react';
// import AddIcon from "@material-ui/icons/Add";
// import Button from '@material-ui/core/Button'; 
// import IconButton from '@material-ui/core/IconButton'; 
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 
import AddIcon from '@material-ui/icons/Add'; 
import Listcomp from './Listcomp';
const ToDoList=()=>{ 
    const[items,setItem]=useState(''); 
    const[newitem,setNewItem]=useState([]);
    const itemEvent=(event)=>{
         setItem(event.target.value);
    };
    const listofItem=()=>{
        setNewItem((prevValue)=>{
return[...prevValue,items]
        });
    };
    return( 
        <>  
        <div className='main_div'>
      <div className='center_div'>
      <br/>
        <h1> ToDo List</h1>
        <br/>
        <input type='text' value= {items}placeholder='Add a items' onChange={itemEvent} ></input> 
        {/* <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>   */}
      <AddIcon classname='newBtn' onClick={listofItem}></AddIcon>
      <br/>
     <ol>
          {
            newitem.map((val,index)=>{
             return<Listcomp key={index} text={val}></Listcomp>;
         })
         }
         
         <br/>
        
     </ol> 
     <br/>
        </div>
    </div>
        </>
         
    )
};
export default ToDoList;
