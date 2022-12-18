import React,{useState} from "react";



function Component(){
    let [input,setInput]=useState("");
    let [item,setItem]=useState([]);
    
    let onAdd=()=>{
        if(!input){

        }else{
            setItem([...item,input])
            setInput("");
        }
    }
    let onDelete=(id)=>{
          console.log(id)
          let update=item.filter((elem,ind)=>{
               return ind !== id
          })
          setItem(update)
        }

    let deleteAll=()=>{
        setItem([])
    }
    console.log(input)
    console.log(item)

    return(
        <div className="todo">
     <div className="container-fluid main t-center ">
        <h3>Add a List Here</h3>

        <div className="add-item">
            <input type="text" placeholder="add item" value={input} onChange={(event)=>setInput(event.target.value)}/>
            <i className="fa fa-plus" onClick={onAdd}></i>
        </div>
        <div className="box">
          { item.map((elem,ind)=>{
           return(<div className="show" key={ind}>
                <h3>{elem}</h3>
                <i className="fa fa-trash" onClick={()=>onDelete(ind)}></i>
            </div>)
           })}
           </div>
            <div className="buttons">
                <button onClick={deleteAll}>Remove All</button>
            </div>
       
     </div>
    </div>
    )
    
}
export default Component;