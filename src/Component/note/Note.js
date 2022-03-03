import React, { useContext } from 'react'
import Cards from '../card/Card'
import { Row, Col } from 'react-bootstrap'
import NoteContext from '../Context/NoteContext.js'


const Note = () => {

    const notesData = useContext(NoteContext);
   
    return (
        <>
            <div className="container">

                <Row>
                    {notesData.notes.map(item => {
                        return (
                            <Col xs={12} sm={6} md={4} key={item._id}>
                                <Cards tittle={item.tittle} des={item.des} date={item.date} id={item._id}  />
                            </Col>
                        )
                    })}
                </Row>
            </div>

        </>
    )
}
            


export default Note;