import React,{useContext,useState} from 'react'
import {Form, Button} from "react-bootstrap"
import NoteContext from '../Context/NoteContext'


const Addnote = () => {
//    const [note, setNote] = useState("")
 const gotnote= useContext(NoteContext)
 const [newdata, setnewdata] = useState({tittle:"",des:""})

 const inputHandler=(e)=>{
     setnewdata({...newdata,[e.target.name]:e.target.value})
    //  value bhrne k lie e,target,name :e,target.value sirf value de rhe name k according but kis seq me value aaegi ye newdata me likha h
 }
 const adding= (e)=>{
     e.preventDefault();
     if(newdata.tittle.length>5 && newdata.des.length>5){ gotnote.Addnotes(newdata)
    }
     
 
 }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tittle</Form.Label>
                    <Form.Control type="text" name='tittle' onChange={inputHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3}  name='des' onChange={inputHandler}/>
                </Form.Group>
                <Button variant="primary" onClick={adding} >Add notes</Button>
            </Form>
        </>
    )
}

export default Addnote;
