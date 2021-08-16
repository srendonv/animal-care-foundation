import React from 'react'
import Button from 'react-bootstrap/Button'

import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

import "./Planes.css"

class Planes extends React.Component  {

  render() {
    return (
      <div id="planes" className="planes-container">
        <h1 className="display-5 text-center"><strong>Planes</strong></h1>
  
        <h5 className="display-6 text-center">
          <strong>Estos son nuestros planes disponibles para tu mascota</strong>
        </h5>

        <PricingTable highlightColor='#1976D2'>
          <PricingSlot title='Básico' priceText='$59/mes' 
            shouldDisplayButton={false} className="pricing-slot-acf">
            <PricingDetail> Chequeo completo </PricingDetail>
            <PricingDetail> Urgencia 24h </PricingDetail>
            <PricingDetail> Guía nutricional </PricingDetail>
            <PricingDetail> Desparasitación </PricingDetail>
            <PricingDetail> Baños e Higiene </PricingDetail>
            <PricingDetail> Vacunación </PricingDetail>
            <PricingDetail>
              <Button variant="primary" className="button-panel-acf">
                Ver más
              </Button>
            </PricingDetail>
          </PricingSlot>
          <PricingSlot title='Premium' className="pricing-slot-acf"
            priceText='$99/mes' shouldDisplayButton={false}>
            <PricingDetail> Chequeo completo </PricingDetail>
            <PricingDetail> Urgencia 24h </PricingDetail>
            <PricingDetail> Guía nutricional </PricingDetail>
            <PricingDetail> Desparasitación </PricingDetail>
            <PricingDetail> Exámenes y Laboratorio clínico </PricingDetail>
            <PricingDetail> Baños e Higiene </PricingDetail>
            <PricingDetail> Vacunación </PricingDetail>
            <PricingDetail> Limpieza dental </PricingDetail>
            <PricingDetail> </PricingDetail>
            <PricingDetail>
              <Button variant="primary" className="button-panel-acf">
                Ver más
              </Button>
            </PricingDetail>
          </PricingSlot>
          <PricingSlot title='Completo' priceText='$149/mes'
            shouldDisplayButton={false} className="pricing-slot-acf">
            <PricingDetail> Chequeo completo </PricingDetail>
            <PricingDetail> Urgencia 24h </PricingDetail>
            <PricingDetail> Guía nutricional </PricingDetail>
            <PricingDetail> Desparasitación </PricingDetail>
            <PricingDetail> Exámenes y Laboratorio clínico </PricingDetail>
            <PricingDetail> Vacunación </PricingDetail>
            <PricingDetail> Baños e Higiene </PricingDetail>
            <PricingDetail> Limpieza dental </PricingDetail>
            <PricingDetail> Educación y capacitación Continua </PricingDetail>
            <PricingDetail> Inseminación artificial </PricingDetail>
            <PricingDetail> Guardería y terapia </PricingDetail>
            <PricingDetail>
              <Button className="button-panel-acf" variant="primary">
                Ver más
              </Button>
            </PricingDetail>
          </PricingSlot>
        </PricingTable>
      </div>
    )
  }

}

export default Planes
