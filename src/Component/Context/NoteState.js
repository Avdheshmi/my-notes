import NoteContext from "./NoteContext";
import { useEffect, useState } from "react";

const NoteState = (props) => {
  const [notes, setnotes] = useState([])

  let url = "http://127.0.0.1:1000/note";
  const fetchnotes = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU1YTc4NWEwOWRhZjZiYjU4ODZhOSIsImlhdCI6MTY0NTIwNDkxMn0.L8WH-9girA2WuL1qHAEFtk_YVMd2JdExgcya5-zjfnc"

      }

    });

    let data = await response.json()
    setnotes(data)

  }


  useEffect(() => {
    
    fetchnotes();

  }, [])




  const Addnotes =  (dataB) => {
    let url = "http://127.0.0.1:1000/note/Addnote"
    const addNoteInDB = async () => {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU1YTc4NWEwOWRhZjZiYjU4ODZhOSIsImlhdCI6MTY0NTIwNDkxMn0.L8WH-9girA2WuL1qHAEFtk_YVMd2JdExgcya5-zjfnc"

      },
      body:JSON.stringify(dataB)

    })
    let data = await response.json()
      setnotes(notes.concat(data))
    
  
  
  }
  addNoteInDB()
};




  const Deletenote = (id) => {

    // const checkC = (e) => {
    //   return e._id !== id
    // }
    // const newnotes = notes.filter(checkC);
    // setnotes(newnotes)
    let url = `http://127.0.0.1:1000/note/delete/${id}`
    const deleteNoteInDB = async () => {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU1YTc4NWEwOWRhZjZiYjU4ODZhOSIsImlhdCI6MTY0NTIwNDkxMn0.L8WH-9girA2WuL1qHAEFtk_YVMd2JdExgcya5-zjfnc"

      },
      

    })
    await response.json()
    fetchnotes();
    
 
  
  }
  deleteNoteInDB()

  };



  // The filter() method creates a new array filled with elements that pass a test provided by a function.

  return (

    <NoteContext.Provider value={{ notes, setnotes, Addnotes, Deletenote }}>
      {props.children}
    </NoteContext.Provider>
  );


};
export default NoteState;