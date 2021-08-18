import React from 'react'
// eslint-disable-next-line
import Card from 'react-bootstrap/Card'
// eslint-disable-next-line
import CardGroup from 'react-bootstrap/CardGroup'
import "./Equipo.css"
import GridCard from '../../../GridCard/GridCard'

const Equipo = () => {
    return (
        <div id="equipo" className="equipo-container">
            <h1 className="display-5 text-center"><strong>Equipo de Trabajo</strong></h1>  
            <GridCard/>
            
        </div>
    )
}

export default Equipo