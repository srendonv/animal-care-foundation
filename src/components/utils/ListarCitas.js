import React, { Component } from 'react'

export default class ListarCitas extends Component {
    render() {
        return (
            <div className="card mt-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Agenda</h2>
                    <div className="lista-citas">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Observaciones</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>nombre</td>
                                <td>fecha</td>
                                <td>hora</td>
                                <td>Observaciones</td>
                                <td>
                                    <div className="d-flex flex-nowrap">
                                    <button className="btn btn-danger">
                                        Editar
                                    </button>
                                    <button className="btn btn-danger">
                                        Borrar
                                    </button>   
                                    </div>

                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}