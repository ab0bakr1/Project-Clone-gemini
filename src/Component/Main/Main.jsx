import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Main.css'

const Main = () => {
  return (
    <main>
        <Container>
            <div className="px-5 mx-5">
                <div className="MainTitle text-start">
                    <h2>Hello, Dev.</h2>
                    <h2>How can I help you today?</h2>
                </div>
                <Row xl={4} lg={4} md={4} sm={2} xs={1} className='g-0 BTNs'>
                    <div className="BTNsCard">
                        <h6>Suggest beautiful places to see on an upcoming road trip</h6>
                        <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <div className="BTNsCard">
                        <h6>Suggest beautiful places to see on an upcoming road trip</h6>
                        <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <div className="BTNsCard">
                        <h6>Suggest beautiful places to see on an upcoming road trip</h6>
                        <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <div className="BTNsCard">
                        <h6>Suggest beautiful places to see on an upcoming road trip</h6>
                        <FontAwesomeIcon icon={faCompass} />
                    </div>
                </Row>
            </div>
        </Container>
    </main>
  )
}

export default Main