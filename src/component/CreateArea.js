// import React,{useState} from 'react'
// function CreateArea(props) {

// const[note ,setNote]=useState({
//     first:"",
//     last:""
// })
// function handleChange(event){
//     const{name,value}=event.target;
//      setNote(prevNote=>{
//          return{
//              ...prevNote,[name]:value
//          }
//      })
// }
// function submitNote(event){
//     props.onAdd(note)
//     setNote({
//         first:"",
//         last:""
//     })

//     event.preventDefault()
//     if(!note.first && !note.last){
//         alert("please add first")
//         return 
        
//     }
// }


//     return (
//         <div>
//         <table><thead >
//         <th style={{backgroundColor:'white'}}><input  name="first"
//         value={note.first}
//         onChange={handleChange} placeholder="first"/>
//         </th> <th style={{backgroundColor:'white'}}><input name="last" 
//         value={note.last} 
//         onChange={handleChange}placeholder="Take a note.." />    
//         </th><th style={{backgroundColor:'white'}}><button  style={{backgroundColor:'green'}} onClick={submitNote}>Add</button>
//         </th></thead></table>
//         </div>
//     )
// }

// export default CreateArea
import React,{useState} from 'react'
function CreateArea(props) {

const[note ,setNote]=useState({
    first:"",
    last:"",age:""
})
function handleChange(event){
    const{name,value}=event.target;
     setNote(prevNote=>{
         return{
             ...prevNote,[name]:value
         }
     })
}
function submitNote(event){
    props.onAdd(note)
    setNote({
        first:"",
        last:"",age:""
    })

    event.preventDefault()
    if(!note.first && !note.last){
        alert("please add first")
        return 
        
    }
}


    return (
        <div className="form">
        
          <div className="input-field">
            <label>First Name</label>
            <input  name="first"
            value={note.first}
             onChange={handleChange} placeholder="First Name" required='required'/>
         </div>
         <div className="input-field">
            <label>Last Name</label>
            <input name="last" 
             value={note.last} 
             onChange={handleChange}placeholder="Last Name" required="required"/> 
             </div>  
         <div className="input-field">
           <label className="age">Age</label> 
           <input name="age"
            
            value={note.age} 
            onChange={handleChange}placeholder="Age" required="required"/> 
            </div>
            <div className="input-field">   
              <button className="add-btn" style={{backgroundColor:'green'}} onClick={submitNote}>Add</button>
             </div>
        </div>
    )
}

export default CreateArea
// <table><thead >
//         <th style={{backgroundColor:'white'}}><input  name="first"
//         value={note.first}
//         onChange={handleChange} placeholder="First Name" required='required'/>
//         </th> <th style={{backgroundColor:'white'}}><input name="last" 
//         value={note.last} 
//         onChange={handleChange}placeholder="Last Name" required="required"/>    
//         </th>
//         <th style={{backgroundColor:'white'}}><input name="age" 
//         value={note.age} 
//         onChange={handleChange}placeholder="Age" required="required"/>    
//         </th>
//         <th style={{backgroundColor:'white'}}><button  style={{backgroundColor:'green'}} onClick={submitNote}>Add</button>
//         </th></thead></table>
//         </div>