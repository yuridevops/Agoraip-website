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
            description: "Administre todo o seu sistema telefônico de onde estiver e monitore os relatórios analíticos de chamadas utilizando os aplicativos personalizados da AgoraIP. Gaste menos tempo fazendo alterações simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",
            image: "devices.png"
        },
        {
            title: "Colabore cara a cara em tempo real.",
            description: "Administre todo o seu sistema telefônico de onde estiver e monitore os relatórios analíticos de chamadas utilizando os aplicativos personalizados da AgoraIP. Gaste menos tempo fazendo alterações simples no seu PABX hospedado e mais tempo com o crescimento sua empresa.",
            image: "conferencia.png",
            invert: true
        },
        {
            title: "Continue sua conversa de qualquer dispositivo.",
            description: "Acesse suas chamadas, correio de voz e configurações do usuário de qualquer lugar que você tenha acesso à internet. Seja utilizando o app de VoIP Móvel da AgoraIP no seu smartphone ou telefones VoIP de escritório, a AgoraIP adapta você ao estilo de vida móvel.",
            image: "homem-telefone.png"
        },
        {
            title: "Obtenha insights com relatórios avançados de análise de chamadas.",
            description: "Veja o quadro geral quando se trata da sua central de atendimentos, utilizando o painel em tempo real e relatórios detalhados do AgoraIP PBX. Escolha entre 110 métricas possíveis para mensurar o desempenho e responsividade de um agente.",
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
        {
            city: 'Pérola do Oeste',
            company: 'Sicoob',
            latitude: -25.825285,
            longitude: -53.7602488
        },
        {
            city: 'Santo André',
            company: 'Sicoob',
            latitude: -23.7100986,
            longitude: -46.562939
        },
        {
            city: 'São Bernardo do Campo',
            company: 'Sicoob',
            latitude: -23.8043604,
            longitude: -46.6718384
        },
        {
            city: 'Canoas',
            company: 'Sicoob',
            latitude: -29.9158509,
            longitude: -51.2495662
        },
        {
            city: 'São Carlos',
            company: 'Sicoob',
            latitude: -22.0183658,
            longitude: -47.9660983
        },
        {
            city: 'Mirandópolis',
            company: 'Sicoob',
            latitude: -21.1364845,
            longitude: -51.1205478
        },
        {
            city: 'Paranavaí',
            company: 'Sicoob',
            latitude: -23.0804189,
            longitude: -52.4878448
        },  
        {
            city: 'Presidente Castelo Branco',
            company: 'Sicoob',
            latitude: -23.278687,
            longitude: -52.1628077
        },  
        {
            city: 'Alto Paraná',
            company: 'Sicoob',
            latitude: -23.1316998,
            longitude: -52.3281384
        },  
        {
            city: 'Nova Londrina',
            company: 'Sicoob',
            latitude: -22.7691385,
            longitude: -53.0073747
        },  
        {
            city: 'São Carlos do Ivaí',
            company: 'Sicoob',
            latitude: -23.3675108,
            longitude: -52.6401631
        },  
        {
            city: 'Terra Rica',
            company: 'Sicoob',
            latitude: -22.728993,
            longitude: -52.6378763
        },  
        {
            city: 'Paranavaí',
            company: 'Sicoob',
            latitude: -23.0804189,
            longitude: -52.4878448
        },  
        {
            city: 'Loanda',
            company: 'Sicoob',
            latitude: -22.9293445,
            longitude: -53.1511394
        },  
        {
            city: 'Rondon',
            company: 'Sicoob',
            latitude: -23.4162056,
            longitude: -52.779967
        },  
        {
            city: 'Hortolândia',
            company: 'Sicoob',
            latitude: -22.8769465,
            longitude: -47.2440488
        },  
        {
            city: 'Campinas',
            company: 'Sicoob',
            latitude: -22.8920565,
            longitude: -47.2079827
        },  
        {
            city: 'Marechal Cândido Rondon',
            company: 'Sicoob',
            latitude: -24.5881677,
            longitude: -54.3016727
        },  
        {
            city: 'Santa Cruz de Monte Castelo',
            company: 'Sicoob',
            latitude: -22.9546741,
            longitude: -53.305594
        },  
        {
            city: 'Londrina',
            company: 'Sicoob',
            latitude: -23.3211063,
            longitude: -51.2358039
        },  
        {
            city: 'Tapejara',
            company: 'Sicoob',
            latitude: -23.6416244,
            longitude: -53.0122078
        },  
        {
            city: 'Barueri',
            company: 'Sicoob',
            latitude: -23.5105739,
            longitude: -46.952562
        },  
        {
            city: 'Macapá',
            company: 'Sicoob',
            latitude: 0.022004,
            longitude: -51.2369502
        },  
        {
            city: 'Santana',
            company: 'Sicoob',
            latitude: 0.009701,
            longitude: -51.4260503
        },  
        {
            city: 'Umuarama',
            company: 'Sicoob',
            latitude: -23.7614198,
            longitude: -53.3401694
        }, 
        {
            city: 'Cascavel',
            company: 'Sicoob',
            latitude: -24.9635987,
            longitude: -53.5423926
        }, 
        {
            city: 'Paraíso do Norte',
            company: 'Sicoob',
            latitude: -23.2828725,
            longitude: -52.6146771
        }, 
        {
            city: 'Nova Santa Rosa',
            company: 'Sicoob',
            latitude: -24.4485064,
            longitude: -54.0590914
        }, 
        {
            city: 'Bento Gonçalves',
            company: 'Sicoob',
            latitude: -29.1498709,
            longitude: -51.5877516
        }, 
        {
            city: 'Medianeira',
            company: 'Sicoob',
            latitude: -25.2909241,
            longitude: -54.1146215
        }, 
        {
            city: 'Arapongas',
            company: 'Sicoob',
            latitude: -23.4157033,
            longitude: -51.5111739
        }, 
        {
            city: 'Santa Helena',
            company: 'Sicoob',
            latitude: -24.8599548,
            longitude: -54.3548322
        }, 
        {
            city: 'Nova Esperança',
            company: 'Sicoob',
            latitude: -23.1863745,
            longitude: -52.2179725
        }, 
        {
            city: 'Corumbá',
            company: 'Sicoob',
            latitude: -19.0283059,
            longitude: -57.6811603
        }, 
        {
            city: 'Campo Grande',
            company: 'Sicoob',
            latitude: -20.480722,
            longitude: -54.7756224
        }, 
        {
            city: 'Caxias do Sul',
            company: 'Sicoob',
            latitude: -29.1653408,
            longitude: -51.2437935
        }, 
        {
            city: 'Matelândia',
            company: 'Sicoob',
            latitude: -25.2412963,
            longitude: -53.9895135
        }, 
        {
            city: 'São Miguel do Iguaçu',
            company: 'Sicoob',
            latitude: -25.3446697,
            longitude: -54.2394821
        }, 
        {
            city: 'Bento Gonçalves',
            company: 'Sicoob',
            latitude: -29.1498709,
            longitude: -51.5877516
        }, 
        {
            city: 'Itaipulandia',
            company: 'Sicoob',
            latitude: -25.1370768,
            longitude: -54.30937
        }, 
        {
            city: 'Missal',
            company: 'Sicoob',
            latitude: -25.1071479,
            longitude: -54.3991427
        }, 
        {
            city: 'Foz do Iguaçu',
            company: 'Sicoob',
            latitude: -25.5171112,
            longitude: -54.6170044
        }, 
        {
            city: 'Foz do Iguaçu',
            company: 'Sicoob',
            latitude: -25.5171112,
            longitude: -54.6170044
        }, 
        {
            city: 'Jesuítas',
            company: 'Sicoob',
            latitude: -24.3792445,
            longitude: -53.3949743
        }, 
        {
            city: 'Três Lagoas',
            company: 'Sicoob',
            latitude: -20.7833166,
            longitude: -51.7345539
        }, 
        {
            city: 'Estrela do Oeste',
            company: 'Sicoob',
            latitude: -20.2885039,
            longitude: -50.4194402
        }, 
        {
            city: 'Prudentópolis',
            company: 'Sicoob',
            latitude: -25.2096267,
            longitude: -50.9994519
        }, 
        {
            city: 'Rebouças',
            company: 'Sicoob',
            latitude: -25.6195806,
            longitude: -50.7101844
        }, 
        {
            city: 'Nova Aurora',
            company: 'Sicoob',
            latitude: -24.5278127,
            longitude: -53.2690182
        }, 
        {
            city: 'Imbituva',
            company: 'Sicoob',
            latitude: -25.2319544,
            longitude: -50.6244028
        }, 
        {
            city: 'Curitiba',
            company: 'Sicoob',
            latitude: -25.4947401,
            longitude: -49.429886
        }, 
        {
            city: 'Tupãssi',
            company: 'Sicoob',
            latitude: -24.5858482,
            longitude: -53.5266451
        }, 
        {
            city: 'Pinhal de São Bento',
            company: 'Sicoob',
            latitude: -26.0328892,
            longitude: -53.4932231
        }, 
        {
            city: 'Planalto',
            company: 'Sicoob',
            latitude: -25.7206134,
            longitude: -53.7730191
        }, 
        {
            city: 'São Jorge Do Oeste',
            company: 'Sicoob',
            latitude: -25.7085736,
            longitude: -52.9365623
        }, 
        {
            city: 'Boa Esperança do Iguaçu',
            company: 'Sicoob',
            latitude: -25.6368452,
            longitude: -53.2257948
        },
        {
            city: 'Nova Prata do Iguaçu',
            company: 'Sicoob',
            latitude: -25.6364994,
            longitude: -53.3675765
        },  
        {
            city: 'Santa Izabel do Oeste',
            company: 'Sicoob',
            latitude: -25.822111,
            longitude: -53.4894108
        },  
        {
            city: 'Pranchita',
            company: 'Sicoob',
            latitude: -26.0203812,
            longitude: -53.7573268
        },  
        {
            city: 'Ampere',
            company: 'Sicoob',
            latitude: -25.9183535,
            longitude: -53.4955894
        },  
        {
            city: 'Salto do Lontra',
            company: 'Sicoob',
            latitude: -25.7865074,
            longitude: -53.3248997
        }, 
        {
            city: 'Cruzeiro do Iguaçu',
            company: 'Sicoob',
            latitude: -25.6154115,
            longitude: -53.1389949
        }, 
        {
            city: 'Dois Vizinhos',
            company: 'Sicoob',
            latitude: -25.750043,
            longitude: -53.1017204
        }, 
        {
            city: 'Francisco Beltrão',
            company: 'Sicoob',
            latitude: -26.0656727,
            longitude: -53.1234953
        }, 
        {
            city: 'Barracão',
            company: 'Sicoob',
            latitude: -26.2501225,
            longitude: -53.6029037
        }, 
        {
            city: 'Barracão',
            company: 'Sicoob',
            latitude: -26.2501225,
            longitude: -53.6029037
        }, 
        {
            city: 'Santo Antônio do Sudoeste',
            company: 'Sicoob',
            latitude: -26.068558,
            longitude: -53.7414534
        }, 
        {
            city: 'Marmeleiro',
            company: 'Sicoob',
            latitude: -26.1487428,
            longitude: -53.0429207
        }, 
        {
            city: 'Realeza',
            company: 'Sicoob',
            latitude: -25.7733027,
            longitude: -53.5529509
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