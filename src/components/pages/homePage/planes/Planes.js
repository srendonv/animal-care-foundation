import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsArrowLeft } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
//eslint-disable-next-line
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
//eslint-disable-next-line
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "./Planes.css"

class Planes extends React.Component  {

  render() {
    return (
      <div id="planes" className="planes-container">

        <h1 className="display-5 text-center"><strong>Planes</strong></h1>
  
        <h5 className="display-6 text-center">
          <strong>Estos son nuestros planes disponibles para tu mascota</strong>
        </h5>

        {/* <PricingTable highlightColor='#1976D2'>
          <PricingSlot title='Básico' priceText='$59/mes' 
            shouldDisplayButton={false} className="pricing-slot-acf">
            <PricingDetail> Chequeo completo </PricingDetail>
            <PricingDetail> Urgencia 24h </PricingDetail>
            <PricingDetail> Guía nutricional </PricingDetail>
            <PricingDetail> Desparasitación </PricingDetail>
            <PricingDetail> Baños e Higiene </PricingDetail>
            <PricingDetail> Vacunación </PricingDetail>
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
          </PricingSlot>
        </PricingTable> */}

        <div className="card-container">
          <div class="card-deck">
            <Card className="shadow-lg p-3 rounded card-container-child">
              <Card.Header as="h3" className="text-center">Silver</Card.Header>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title className="text-center card-container-child-title"><h3 className="card-container-child-price">$59/mes</h3></Card.Title>
                <div className="card-container-child-list text-center">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><BiCurrentLocation /> Chequeo completo </li>
                    <li><BiCurrentLocation /> Urgencia 24h </li>
                    <li><BiCurrentLocation /> Guía nutricional </li>
                    <li><BiCurrentLocation /> Baños e Higiene </li>                    
                  </ul>
                </div>
              </Card.Body>
              <HashLink to="/login#auth" className="text-center">
                <Button className="border border-white" variant="outline-light" size="lg" type="submit">Contactanos!</Button>
              </HashLink>
            </Card>

            <Card className="shadow-lg p-3 rounded card-container-child">
            <Card.Header as="h3" className="text-center card-container-child-title">Gold</Card.Header>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title className="text-center"><h3 className="card-container-child-price">$99/mes</h3></Card.Title>
                
                <h7 className="text-center card-container-child-subtitle"><BsArrowLeft /> Silver Plan más:</h7>
         
                <div className="card-container-child-list text-center">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><BiCurrentLocation /> Vacunación </li>
                    <li><BiCurrentLocation /> Desparasitación </li>
                    <li><BiCurrentLocation /> Laboratorio clínico </li>
                    <li><BiCurrentLocation /> Limpieza dental </li>
                  </ul>
                  </div>
              </Card.Body>
              <HashLink to="/login#auth" className="text-center">
                <Button className="border border-white" variant="outline-light" size="lg" type="submit">Contactanos!</Button>
              </HashLink>
            </Card>

            <Card className="shadow-lg p-3 card-container-child">
            <Card.Header as="h3" className="text-center card-container-child-title">Diamond</Card.Header>
              <Card.Body>
                <Card.Title className="text-center"><h3 className="card-container-child-price">$149/mes</h3></Card.Title>

                <h7 className="text-center card-container-child-subtitle"><BsArrowLeft /> Gold Plan más:</h7>

                <div className="card-container-child-list text-center">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li><BiCurrentLocation /> Fisioterapia </li>
                    <li><BiCurrentLocation /> Adiestramiento </li>
                    <li><BiCurrentLocation /> Inseminación artificial </li>
                    <li><BiCurrentLocation /> Guardería</li>
                  </ul>
                  </div>
               </Card.Body>
               <HashLink to="/login#auth" className="text-center">
                <Button className="border border-white" variant="outline-light" size="lg" type="submit">Contactanos!</Button>
              </HashLink>
            </Card>
          </div>
        </div>

        
      </div>
    )
  }

}

export default Planes
