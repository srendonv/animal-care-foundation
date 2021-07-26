import React, { Component } from 'react'
import '../assets/css/index.css'

export default class AgregarCitas extends Component {

    constructor(props) {
        super(props)

        this.onChangeNombre = this.onChangeNombre.bind(this)
        this.onChangeFecha = this.onChangeFecha.bind(this)
        this.onChangeHora = this.onChangeHora.bind(this)
        this.onChangeObservaciones = this.onChangeObservaciones.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            nombre: '',
            fecha: '',
            hora: '',
            observaciones: ''
        }
    }

    onChangeNombre(e) {
        this.setState({ nombre: e.target.value })
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

        // const citasObject = {
        //     nombre: this.state.nombre,
        //     fecha: this.state.fecha,
        //     hora: this.state.hora,
        //     observaciones: this.state.observaciones
        // }

        // this.setState({
        //     nombre: '',
        //     fecha: '',
        //     hora: '',
        //     observaciones: ''
        // })
    }

    render() {
        return (
            <div className="formulario card mt-4">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <h2> Agregar Citas</h2>
                        <hr />
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    placeholder="Tu nombre"
                                    autoComplete="off"
                                    value={this.state.nombre}
                                    onChange={this.onChangeNombre}
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="form-group col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    name="fecha"
                                    className="form-control"
                                    autoComplete="off"
                                    value={this.state.fecha}
                                    onChange={this.onChangeFecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">hora</label>
                            <div className="form-group col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    name="hora"
                                    className="form-control"
                                    autoComplete="off"
                                    value={this.state.hora}
                                    onChange={this.onChangeHora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-4 col-form-label">Observaciones</label>
                            <div className="form-group">
                                <textarea 
                                    name="observaciones"
                                    className="form-control"
                                    autoComplete="off"
                                    value={this.state.observaciones}
                                    onChange={this.onChangeObservaciones}
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        );
    };

}