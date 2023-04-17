import { Link } from "react-router-dom"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"

import cliente from '../cadastro/assets/imagem-concluido.svg'
import { Botao } from "../../componentes/Botao/Botao"
import { Col, Row } from "react-grid-system"

const Concluido = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Tipografia variante='h1' componente='h1' >
                Seu perfil está completo!
            </Tipografia>
            <Tipografia variante='body' componente='body'>
                Agora é só começar a se conectar com os melhores freelancers do mercado!
            </Tipografia>
            <img src={cliente} alt="" />
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to='/cadastro'>
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Concluido