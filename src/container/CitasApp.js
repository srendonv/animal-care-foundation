import React, { Component } from 'react'
import AgregarCitas from '../components/AgregarCitas'
import ListarCitas from '../components/ListarCitas'

export class CitasApp extends Component {
    render() {
        return (
            <div>
                <div className="container text-center">
                    <header>
                        <h1>Portal del citas</h1>
                    </header>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <AgregarCitas />
                        </div>
                        <div className="col-md-6">
                            <ListarCitas />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CitasApp
