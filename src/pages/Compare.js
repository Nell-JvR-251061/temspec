import '../App.css'; //App's styling document
import InfoCard from '../components/InfoCard';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Compare = () => {

    return (
        <Container>
            <Row className='blue-text-color'>
                <Col>
                    <Row>
                        <Col>
                            <p>Image 1</p>
                        </Col>
                        <Col>
                            <p>Image 2</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Height</p>
                        </Col>
                        <Col>
                            <p>60cm</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Weight</p>
                        </Col>
                        <Col>
                            <p>15kg</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Catch Rate</p>
                        </Col>
                        <Col>
                            <p>150</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>Traits</p>
                        <p>Hydrologist | Rested</p>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col>
                            <p>Hocus</p>
                        </Col>
                        <Col>
                            <p>[79]</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Melee</p>
                        </Col>
                        <Col>
                            <p>Fire</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>Graph</p>
                    </Row>
                    <Row>
                        <Col>
                            <p>Move 1</p>
                        </Col>
                        <Col>
                            <p>Move 2</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Move 3</p>
                        </Col>
                        <Col>
                            <p>Move 4</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Move 5</p>
                        </Col>
                        <Col>
                            <p>Move 6</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

};

export default Compare;