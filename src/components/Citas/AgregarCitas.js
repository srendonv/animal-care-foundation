import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../assets/css/index.css';
import axios from 'axios';
import {backHost} from '../../config/env';
import swal from 'sweetalert';

export default class AgregarCitas extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeFecha = this.onChangeFecha.bind(this)
        this.onChangeHora = this.onChangeHora.bind(this)
        this.onChangeObservaciones = this.onChangeObservaciones.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            email: '',
            fecha: '',
            hora: '',
            observaciones: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeFecha(e) {
        this.setState({ fecha: e.target.value })
    }

    onChangeHora(e) {
        this.setState({ hora: e.target.value })
    }

    onChangeObservaciones(e) {
        this.setState({ observaciones: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
    
        const dateObject = {
          name: this.state.name,
          email: this.state.email,
          fecha: this.state.fecha,
          hora: this.state.hora,
          observaciones: this.state.observaciones
        };    
    
        axios.post(`${backHost}/dates/date-create`, dateObject)
          .then(
              res => {
                  console.log(res.data);
                  swal("Su cita fue creada con éxito!");
                 });
    
        this.setState({
            name: '',
            email: '',
            fecha: '',
            hora: '',
            observaciones: ''
        });


      }    

    render() {
        return (
            <div className="citas-container">  

                <div className="formulario"> 
                <h2>AGENDAR CITA</h2>
                    <hr/>  
                <div className="form-wrapper">       
                    <Form onSubmit={this.onSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}  controlId="formGridName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                placeholder="Ingrese su name completo" 
                                value={this.state.name}        
                                onChange={this.onChangeName}/>
                                <Form.Text className="text-muted">
                                    Por favor coloque su name y apellido.
                                </Form.Text>         
                            </Form.Group>      
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Ingrese su email" 
                            value={this.state.email}
                            onChange={this.onChangeEmail}/>
                            <Form.Text className="text-muted">
                                Aquí le enviaremos la confirmación de su cita.
                            </Form.Text>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">                    
                            <Form.Group as={Col} controlId="formGridFecha">
                                <Form.Label>Fecha</Form.Label>
                                <input 
                                    type="date"
                                    name="fecha"
                                    autoComplete="off"
                                    value={this.state.fecha}
                                    onChange={this.onChangeFecha}
                                    class="form-control">
                                </input>
                            </Form.Group> 
                        </Row>

                        <Row className="mb-3">                
                            <Form.Group as={Col} controlId="formGridAddress1" >
                                <Form.Label>Hora</Form.Label>
                                <div className="text-center">
                                <input 
                                    type="time"
                                    name="hora"
                                    autoComplete="off"
                                    min="08:00" 
                                    max="18:00" 
                                    required
                                    value={this.state.hora}
                                    onChange={this.onChangeHora}
                                    class="form-control">
                                </input>
                                </div>
                                <Form.Text className="text-muted">
                                    Programa su cita de 8:00 AM a 6:00 PM.
                                </Form.Text>
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3" controlId="formGridObservaciones" >
                            <Form.Label>Observaciones</Form.Label>              
                            <Form.Control 
                            as="textarea"
                            placeholder="Escriba las observaciones pertinentes" 
                            style={{ height: '100px' }}
                            value={this.state.observaciones}
                            onChange={this.onChangeObservaciones}/>                            
                        </Form.Group>    
                                    
                        <div className="d-grid gap-2 text-center">
                            <Button variant="primary" size="lg" type="submit">
                                Guardar
                            </Button>
                        </div>
                    </Form>
                </div>    
                            
                </div>
            </div>
        );
    };

}