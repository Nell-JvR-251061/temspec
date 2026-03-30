import '../App.css'; //App's styling document
import Buffer from '../components/Buffer';
import BarChart from '../components/BarChart';
import TemCompare from '../components/TemCompare';

import { useState, useEffect } from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Compare = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [tem, setTem] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://temtem-api.mael.tech/api/temtems');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

            setLoading(false);
        };


        getData();

    }, []);

    const UpdateTem = (_name, _array) => {
        let returnVar;
        if (_name == null) {
            returnVar = data[Math.floor(Math.random() * (data.length))];
        }
        else {
            let found = _array.findIndex(temName => temName == _name);
            returnVar = data[found];
        }

        setTem(returnVar);
    }

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {

        if (JSON.stringify(tem) === '{}') {
            UpdateTem();
        }

        let array = data.map(e => e.name);

        return (
            <Container className='compare-container'>
                <Row className='column-gap-3'>
                    <TemCompare
                        _tem={tem}
                    />

                    <Col className='tem-display p-5'>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Hit Points</h3>
                            <BarChart
                                _statOne={tem.stats.hp}
                                _statTwo={tem.stats.hp}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Speed</h3>
                            <BarChart
                                _statOne={tem.stats.spd}
                                _statTwo={tem.stats.spd}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Stamina</h3>
                            <BarChart
                                _statOne={tem.stats.sta}
                                _statTwo={tem.stats.sta}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Attack</h3>
                            <BarChart
                                _statOne={tem.stats.atk}
                                _statTwo={tem.stats.atk}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Special Attack</h3>
                            <BarChart
                                _statOne={tem.stats.spatk}
                                _statTwo={tem.stats.spatk}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Defense</h3>
                            <BarChart
                                _statOne={tem.stats.def}
                                _statTwo={tem.stats.def}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Special Defense</h3>
                            <BarChart
                                _statOne={tem.stats.spdef}
                                _statTwo={tem.stats.spdef}
                            />
                        </Row>
                    </Col>

                    <TemCompare
                        _tem={tem}
                    />
                </Row>

            </Container>
        );

    };
};

export default Compare;