import React from 'react';
// eslint-disable-next-line
import { useState, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './Footer.css';
import { MapContainer, TileLayer,Popup, Circle, FeatureGroup} from 'react-leaflet';
// eslint-disable-next-line
import { Marker, LayerGroup, Rectangle } from 'react-leaflet';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { MdPets, MdMail } from 'react-icons/md';
import { ImHome3, ImWhatsapp } from 'react-icons/im';
import { FiBookOpen } from 'react-icons/fi';
import {APIManagement} from 'azure-react-icons';
// eslint-disable-next-line
import {  iconMap  } from './Icons';

const center = [4.7944704, -75.6858978]
// const position = [37.4219317, -122.0847472]
const fillBlueOptions = { fillColor: 'blue' }
const fillRedOptions = { color: 'red' }
// eslint-disable-next-line
const greenOptions = { color: 'green', fillColor: 'green' }
// eslint-disable-next-line
const purpleOptions = { color: 'purple' }
  

const Footer = () => {
    return (  
        
        <div id="footer" className="footer-container">         
            <Container fluid="md">
                <Row>
                    <Col>
                    <Link
                        to={
                            '/'
                        }
                        target='_self'
                        aria-label='Footer'
                        >
                    <h1 className="display-5 text-center"><strong>Encuéntranos</strong></h1>
                    </Link>
                    
                    </Col>

                </Row>
                
                <Row xs={1} md={2}>
                    <Col> 
                        <div className="address-icons" >
                            <div className="address-icons-link">
                                <div className="footer-subtitle"><strong>Pereira, Colombia</strong></div>
                            </div> 

                            <div className="address-icons-link" >
                                <ImHome3 className='navbar-icon' /> Cra. 27 ##10-02
                            </div>   
                            <div className="address-icons-link" >
                                <MdMail className='navbar-icon' /> 
                                <a href="mailto:animalcarefoundation.xyz@gmail.com">
                                animalcarefoundation.xyz@gmail.com</a>
                            </div>           
                            <div className="address-icons-link" >
                                <FaPhoneAlt className='navbar-icon' /> 
                                <a href="tel:+5763137300">+576 3137300</a>
                            </div>     
                            <div className="address-icons-link" >
                                <ImWhatsapp className='navbar-icon' /> 
                                <a href="tel:+573014733020">+57 3014733020</a>
                            </div>  
                        </div>
                    </Col>

                    <Col>
                        <div className="mymap-container">
                            <MapContainer center={center} zoom={15.5} scrollWheelZoom={false}>
                                <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <FeatureGroup >
                                <Popup>Animal Care Foundation</Popup>
                                <Circle center={center} pathOptions={fillBlueOptions} radius={100} />
                                <Circle center={center} pathOptions={fillRedOptions} radius={50} stroke={false} />
                                {/* <Rectangle bounds={rectangle} /> */}
                                </FeatureGroup>
                            </MapContainer>
                                                   
                            
                        </div>
                    </Col>
                </Row>
               
                <Row>
                  <section className='social-media'>
                        <div className='social-media-wrap'>
                            <div className='footer-logo'>
                                <Link to='/' className='social-logo'>
                                <MdPets className='navbar-icon' />
                                Aminal Care
                                </Link>
                            </div>
                            <div className='website-rights'>Animal Care © 2021</div>
                            <div className='social-icons'>    

                                <a href="https://github.com/srendonv/animal-care-foundation" target="_blank" rel="noreferrer">
				                <FaGithub size={25} color="white" /></a>        
                            
                                <a href="https://animalcarefoundation.gitbook.io/animalcarefoundation/" target="_blank" rel="noreferrer">
				                <FiBookOpen size={25} color="white" /></a>                             

                                <a href="https://dev.azure.com/srendonv/AnimalCareFoundation/" target="_blank" rel="noreferrer">
				                <APIManagement size={32} color="white" /></a>
                                
                                <a href="https://www.instagram.com/imastereducacion/?hl=es" target="_blank" rel="noreferrer">
				                <FaInstagram size={25} color="white" /></a>
                                
                                <a href="https://www.youtube.com/channel/UCNz3oP-hmpxwyESng_vp_Wg" target="_blank" rel="noreferrer">
				                <FaYoutube size={25} color="white" /></a>

                                <a href="https://www.facebook.com/imastereducacion" target="_blank" rel="noreferrer">
				                <FaFacebook size={25} color="white" /></a>

                                <a href="https://www.twitter.com/Ministerio_TIC/" target="_blank" rel="noreferrer">
				                <FaTwitter size={25} color="white" /></a>
                            </div>
                        </div>
                    </section>                   
                </Row>
            </Container>        
        </div>
     )
}
export default Footer;

