import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Beneficios.css"

const Beneficios = () => {
    return (
        <div id="beneficios" className="beneficios-container">
            <h1 className="display-5 text-center"><strong>Beneficios</strong></h1>  

            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>ESTE ES EL COMPONENTE <strong>BENEFICIOS</strong></Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default Beneficios
