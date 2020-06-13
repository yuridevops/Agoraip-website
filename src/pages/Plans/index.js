import React from 'react'
import './styles.css'
import { FiCheck } from 'react-icons/fi'

const Plans = () => {
    return (
            <div className="row-plan">
                <div className="item-plan">
                    <h1>Temos soluções para empresas de todos os tamanhos.</h1>
                </div>
                <div className="item-plan">
                    <div className="card basic" >
                        <h2>Basic</h2>
                        <ul className="ul-list">
                            <li><FiCheck color="#5af542"/> 5 Ramais IP</li>
                            <li><FiCheck color="#5af542"/> Gravações Online</li>
                            <li><FiCheck color="#5af542"/> Controle de PBX Online</li>
                            <li><FiCheck color="#5af542"/> Siga-me</li>
                            <li><FiCheck color="#5af542"/> Relatórios de chamadas</li>
                            <li><FiCheck color="#5af542"/> Fila de chamadas com anúncio</li>
                            <li><FiCheck color="#5af542"/> Sala de conferência</li>
                            <li><FiCheck color="#5af542"/> Autoatendimento</li>
                            <li><FiCheck color="#5af542"/> Softphone Incluso</li>
                        </ul>
                    </div>
                    <div className="card standard">
                        <h2>Standard</h2>
                        <span>(Recomendado)</span>
                        <ul className="ul-list">
                            <li><FiCheck color="#5af542"/> 10 Ramais IP</li>
                            <li><FiCheck color="#5af542"/> Gravações Online</li>
                            <li><FiCheck color="#5af542"/> Controle de PBX Online</li>
                            <li><FiCheck color="#5af542"/> Siga-me</li>
                            <li><FiCheck color="#5af542"/> Relatórios de chamadas</li>
                            <li><FiCheck color="#5af542"/> Fila de chamadas com anúncio</li>
                            <li><FiCheck color="#5af542"/> Sala de conferência</li>
                            <li><FiCheck color="#5af542"/> Autoatendimento</li>
                            <li><FiCheck color="#5af542"/> Softphone Incluso</li>
                            <li><FiCheck color="#5af542"/> API Click to Call</li>
                        </ul>
                    </div>
                    <div className="card premium">
                        <h2>Premium</h2>
                        <ul className="ul-list">
                            <li><FiCheck color="#5af542"/> 20 Ramais IP</li>
                            <li><FiCheck color="#5af542"/> Gravações Online</li>
                            <li><FiCheck color="#5af542"/> Controle de PBX Online</li>
                            <li><FiCheck color="#5af542"/> Siga-me</li>
                            <li><FiCheck color="#5af542"/> Relatórios de chamadas</li>
                            <li><FiCheck color="#5af542"/> Fila de chamadas com anúncio</li>
                            <li><FiCheck color="#5af542"/> Sala de conferência</li>
                            <li><FiCheck color="#5af542"/> Autoatendimento</li>
                            <li><FiCheck color="#5af542"/> Softphone Incluso</li>
                            <li><FiCheck color="#5af542"/> API Click to Call</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Plans