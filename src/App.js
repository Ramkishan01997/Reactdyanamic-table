// import './styles.css';
// import React,{useState}  from 'react';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import Note from './component/Note';
// import CreateArea from './component/CreateArea'
// //import notes from './notes'
// function App(){
//    const[notes,setNotes]=useState([])

//   function addNote(note){
//     setNotes(prevNotes=>{
//       return[...prevNotes,note]
//     })
// console.log(note)
//   }
//   function deleteNote(id){
//     setNotes(prevNotes=>{
//       return prevNotes.filter((noteItem,index)=>
//       {return index!==id})
//     })
//   }
// return (
// <div>
//      <Header/>
//      <CreateArea onAdd={addNote}/>
//      <table style={{border:'1px solid black',tableSpacing:'1px'}}>
//      <thead><tr>
//      <th>First Name</th>
//            <th> Last Name</th> <th>Age</th><th>Delete</th></tr></thead>
     
     
//      {notes.map((noteItem,index)=>{
//       return<Note
//       key={index}
//       id={index}
//        title={noteItem.first}
//         content={  noteItem.content} onDelete={deleteNote}/>
      
//     })}
//     </table>
//      <Footer/>
// </div>
// );
// }
// export default App;
import './styles.css';
import React,{useState}  from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';
import CreateArea from './component/CreateArea'
//import notes from './notes'
function App(){
   const[notes,setNotes]=useState([])

  function addNote(note){
    setNotes(prevNotes=>{
      return[...prevNotes,note]
    })
console.log(note)
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>
      {return index!==id})
    })
  }
return (
<div>
     <Header/>
     <div className="main">
     <div className="form">
     <CreateArea  onAdd={addNote}/>
     </div>
     <div className="table">
     <h1 className="student">Student Details</h1>
     <table style={{border:'1px solid black',tableSpacing:'1px'}}>
     <thead><tr>
     <th>First Name</th>
           <th> Last Name</th> <th>Age</th><th>Delete</th></tr></thead>
     
     
     {notes.map((noteItem,index)=>{
      return<Note 
      key={index}
      id={index}
       first={noteItem.first}
        last={  noteItem.last}
        age={noteItem.age}
         onDelete={deleteNote}/>
      
    })}
    </table></div>
    </div>
     <Footer/>
</div>
);
}
export default App;