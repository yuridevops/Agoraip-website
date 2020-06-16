import React, { useState, useEffect } from 'react'
import './styles.css'
import logo from '../../assets/agoraip-logo.png'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
    const [selected, setSelected] = useState(0)


    useEffect(() => {
        const linkSelected = localStorage.getItem("link-selected")
        if (linkSelected !== null) {
            console.log(linkSelected)
            setSelected(JSON.parse(linkSelected))
        }
    }, [])


    function selectLink(id) {
        setSelected(id)
        localStorage.setItem("link-selected", JSON.stringify(id))
    }

    function isSelected(id) {
        return id === selected ? "button-header-selected button-header" : "button-header"
    }

    return (
        <header>
            <div className="container-logo">
                <Link to="/"><img src={logo} alt="AgoraIP Logo" /></Link>
            </div>
            <div className="container-contact">
                <ul className="page-links">
                    <Link to="/" onClick={() => selectLink(0)} ><li className={isSelected(0)} >Inicio</li></Link>
                    <Link to="planos" onClick={() => selectLink(1)} ><li className={isSelected(1)} >Planos</li></Link>
                    <Link to="sobre" onClick={() => selectLink(2)}><li className={isSelected(2)} >Sobre nós</li></Link>

                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511952772090" target="_blank" >
                        <li className="button-header button-header-new" >
                            <span>Suporte</span>
                            <span style={{ fontSize: 12 }}>(11) 95277-2090 <FaWhatsapp color="#5af542" fontSize={15} /> </span>
                        </li>
                    </a>
                </ul>
                <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" className="button-header-especial" target="_blank" >
                    <span>Entre em contato </span>
                    <span>(41) 99272-4349 <FaWhatsapp color="#fff" fontSize={15} /></span>
                    </a>
            </div>
        </header>
    )
}

export default Header