import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Planes from './planes/Planes'
import Beneficios from './beneficios/Beneficios'
import Equipo from './equipo/Equipo'
import "./Home.css"

const Home = () => {
    return (
        <>
            <HeroSection />
            <hr className="hr-rule"/>
            <Planes />
            <hr className="hr-rule"/>
            <Beneficios />
            <hr className="hr-rule"/>
            <Equipo />
        </>
    )
}
export default Home