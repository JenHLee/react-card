import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './students.css';
import { useState } from 'react';

function Students() {
    const [showGpa, setShowGpa] = useState(false);

    return (
        <>
            <h2>Students List</h2>
        <Row xs={1} md={2} className="g-4">
            {[
    {	
      image:
        "s1.png",
      name: "Mike",
      gpa: 3.8
    },
    {
      image:
        "s2.png",
        name: "Manal",
        gpa: 3.6
    },
    {
      image:
        "s3.png",
        name: "Moe",
        gpa: 3.2
    },
    {
      image:
        "s4.png",
        name: "Mary",
        gpa: 2.6
    }
  ].map((list) => (
                <Col>
                    <Card key={list.name}>
                        <Card.Img variant="top" src={list.image} alt="student image" style={{width: "200px", height: "200px", margin: "auto", marginTop: "20px", display: "flex"}}/>
                        <Card.Body>
                            <Card.Title>{list.name}</Card.Title>
                            {showGpa ? (<Card.Text>{list.gpa}</Card.Text>) : (<Card.Text></Card.Text>)}
                            <Button onClick={() => {setShowGpa(!showGpa)}}>Grade</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    )
}


export default Students;