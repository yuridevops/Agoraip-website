import React from 'react'
import './styles.css'
import logo from '../../assets/agoraip-logo.png'
const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-itens'>
                    <img src={logo} />
                </div>
                <div className='footer-itens'>
                    2   
                </div>
                <div className='footer-itens'>
                    3
                </div>
            </div>
        </footer>
    )
}

export default Footer