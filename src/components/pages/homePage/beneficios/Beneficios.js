import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Beneficios.css"
import { CardDeck, CardGroup } from 'react-bootstrap'

import IconButton from '@material-ui/core/IconButton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = {

  largeIcon: {
    width: 240,
    height: 240,
  },

};

const Beneficios = () => {
  return (
    <div id="beneficios" className="beneficios-container">
      <h1 className="display-5 text-center"><strong>Beneficios</strong></h1>

      <div style={{paddingBottom: 18}}>
        <h5 className="display-6 text-center">
          <strong>Conoce un poco más nuestros beneficios</strong>
        </h5>
      </div>

      <CardDeck>

        <Card className="text-center">
          <Card.Body>
            <IconButton iconStyle={styles.largeIcon}>
              <AccessTimeIcon style={{ fontSize: 72 }} htmlColor="#999999"/>
            </IconButton>
            <Card.Title>
              <h4 className="display-5 text-center">
                <strong>Servicio 24h</strong>
              </h4>
            </Card.Title>
            <Card.Text>
              Sabemos lo importante que es tu mascota para ti por eso queremos estar para ti cuando nos necesites.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Body>
            <IconButton iconStyle={styles.largeIcon}>
              <ApartmentIcon style={{ fontSize: 72 }}  htmlColor="#999999"/>
            </IconButton>
            <Card.Title>
              <h4 className="display-5 text-center">
                <strong>Infraestructua</strong>
              </h4>
            </Card.Title>
            <Card.Text>
              Tenemos las instalaciones e insumos apropiados para brindarte un servicio de calidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Body>
            <IconButton iconStyle={styles.largeIcon}>
              <FavoriteBorderIcon style={{ fontSize: 72 }}  htmlColor="#999999"/>            
            </IconButton>
            <Card.Title>
              <h4 className="display-5 text-center">
                <strong>Confianza</strong>
              </h4>
            </Card.Title>
            <Card.Text>
              Somos un excelente equipo de profesionales y expertos en belleza con experiencia en el cuidado animal.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardDeck>

    </div>
  )
}

export default Beneficios
