import React from 'react'
const Note = (props) => {
    function handleClick(){
      props.onDelete(props.id)  
    }
    return (<>
        
            <tbody><tr><td>{props.first}</td>
           <td> {props.last}</td> 
           <td> {props.age}</td> <td>
           <span><button style={{backgroundColor:'red'}} onClick={handleClick}>Delete</button></span></td>
           </tr> </tbody> 
           </>
    )
}
export default Note;