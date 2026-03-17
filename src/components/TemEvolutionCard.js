import '../App.css';
import Buffer from './Buffer';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { elements } from 'chart.js';

const TemEvolutionCard = ({ _dataBase, _tem }) => {

    const [evos, setEvos] = useState([])
    const [names, setNames] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const setVars = () => {
            setEvos(_tem.evolution.evolutionTree.map(tem => tem.number));
            setNames(_tem.evolution.evolutionTree.map(tem => tem.name));
        };

        setVars();
        setLoading(false);

    }, []);

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {
        const imgs = evos.map(element => {
            return _dataBase[element - 1].wikiRenderStaticUrl;
        });

        return (
            <Container className='tem-evo'>
                <Row className='evo-title'>
                    <h2 className='text-center primary-text-font blue-text-color no-margin'>Evolution Chain</h2>
                </Row>

                <Row className='evo-card'>
                    {imgs.map((url, index) => (
                        <Col key={index} className='d-flex flex-column justify-content-center align-items-center justify-content-evenly'>
                            <img src={url} className='img-fluid justify-self-center'></img>
                        </Col>
                    ))}
                </Row>

                <Row className='evo-names'>
                    {imgs.map((url, index) => (
                        <Col key={index} className='d-flex flex-column justify-content-center align-items-center justify-content-evenly'>
                            <h4 className='blue-text-color'>{names[index]}</h4>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

};

export default TemEvolutionCard;