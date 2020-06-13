import React, { useState } from 'react'
import './styles.css'
import RowFeature from '../../components/RowFeature'
import introImage from '../../assets/ip-telephony.png'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import MapLeaflet from '../../components/MapLeaflet';
import imgDuvida from '../../assets/duvidas.png';



const Home = () => {

    const [videoOpened, setVideoOpened] = useState(false)


    function handleVideoOpened() {
        setVideoOpened(!videoOpened)
    }


    const rows = [
        {
            title: "Administre seu sistema telefônico empresarial de qualquer lugar.",
            description: "Administre todo o seu sistema telefônico de onde estiver e monitore os relatórios analíticos de chamadas utilizando os aplicativos personalizados da Jive. Gaste menos tempo fazendo alterações simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",
            image: "devices.png"
        },
        {
            title: "Colabore cara a cara em tempo real.",
            description: "Administre todo o seu sistema telefônico de onde estiver e monitore os relatórios analíticos de chamadas utilizando os aplicativos personalizados da Jive. Gaste menos tempo fazendo alterações simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",
            image: "conferencia.png",
            invert: true
        },
        {
            title: "Continue sua conversa de qualquer dispositivo.",
            description: "Acesse suas chamadas, correio de voz e configurações do usuário de qualquer lugar que você tenha acesso à internet. Seja utilizando o app de VoIP Móvel da Jive no seu smartphone ou telefones VoIP de escritório, a Jive adapta você ao estilo de vida móvel.",
            image: "homem-telefone.png"
        },
        {
            title: "Obtenha insights com relatórios avançados de análise de chamadas.",
            description: "Veja o quadro geral quando se trata da sua central de atendimentos, utilizando o painel em tempo real e relatórios detalhados do Jive Contact Center Pro. Escolha entre 110 métricas possíveis para mensurar o desempenho e responsividade de um agente.",
            image: "dashboard.png",
            invert: true
        },

    ]

    const mapPoints = [
        {
            city: 'Campo bom',
            company: 'Sicoob',
            latitude: -29.6760083,
            longitude: -51.0845639
        },
        {
            city: 'São Paulo',
            company: 'Sicoob',
            latitude: -23.6815314,
            longitude: -46.8754974
        },
        {
            city: 'Lajeado',
            company: 'Sicoob',
            latitude: -29.4498076,
            longitude: -52.065542
        },
        {
            city: 'Dourados',
            company: 'Sicoob',
            latitude: -22.158603,
            longitude: -55.4217782
        },
        {
            city: 'Cachoeira do Sul',
            company: 'Sicoob',
            latitude: -30.0262357,
            longitude: -52.9189279
        },
        {
            city: 'Santa Maria',
            company: 'Sicoob',
            latitude: -29.7767196,
            longitude: -54.103253
        },
        {
            city: 'Marechal Cândido Rondon',
            company: 'Sicoob',
            latitude: -24.5881677,
            longitude: -54.301672
        },
        {
            city: 'Assis Chateaubriand',
            company: 'Sicoob',
            latitude: -24.3997629,
            longitude: -53.5337091
        },
        {
            city: 'Formosa do Oeste',
            company: 'Sicoob',
            latitude: -24.2960757,
            longitude: -53.3247233
        },
        {
            city: 'São José dos Campos',
            company: 'Sicoob',
            latitude: -23.1891287,
            longitude: -46.0031001
        },
        {
            city: 'Santos',
            company: 'Sicoob',
            latitude: -23.8638726,
            longitude: -46.4303169
        },
        {
            city: 'Gravataí',
            company: 'Sicoob',
            latitude: -29.8856961,
            longitude: -51.0586277
        },
        {
            city: 'Pérola',
            company: 'Sicoob',
            latitude: -29.8853614,
            longitude: -51.0586278
        },
        {
            city: 'São Caetano do Sul',
            company: 'Sicoob',
            latitude: -23.6248019,
            longitude: -46.5999275
        },
        {
            city: 'Ponta Porã',
            company: 'Sicoob',
            latitude: -22.5175704,
            longitude: -55.7808976
        },

    ]



    return (
        <div className="container-content">
            <div className="container-intro">
                <div className='container-intro-text dl-content'>
                    <h1>
                        Bem vindo a AgoraIP!<br /><br />
                        <span style={{ fontSize: 24  }}>
                            Aumente a <span style={{ color: '#5658DD' }}>produtividade</span> da sua equipe sem se preocupar com nada, conheça a central telefônica <span style={{ color: '#5658DD' }}>empresarial</span> em nuvem da AgoraIP.
                    </span>
                    </h1>
                </div>
                <div className='container-intro-video dl-content' onClick={handleVideoOpened}>
                    {
                       
                            <iframe src="https://player.vimeo.com/video/66865270?color=ff0179" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    }

                </div>
            </div>
            {
                rows.map(row => <RowFeature key={row.title}  {...row} />)
            }
            <div className="anouncement">
                <h1>Venha fazer parte da nossa família</h1>
            </div>
            <div className="customer-map">
                <div className="customer-data">
                    <h3>Nossos clientes atuam em diversos setores da industria espalhados pelo Brasil.</h3>
                    <h3>Atualmente a AgoraIP possui clientes em mais de 90 municípios.</h3>
                    <h3>Caso esteja interessado em saber mais sobre os nossos planos ou tenha alguma dúvida, entre em contato agora mesmo! </h3>
                    <div className="container-duvidas">

                        <span className="button-header-especial">Entre em contato</span>
                    </div>
                </div>
                <MapLeaflet mapPoints={mapPoints}/>
            </div>


        </div>
    )
}

export default Home