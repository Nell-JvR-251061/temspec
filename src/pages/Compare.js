import '../App.css'; //App's styling document
import InfoCard from '../components/InfoCard';
import Buffer from '../components/Buffer';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import PolarChart from '../components/PolarChart';

import { useState, useEffect } from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Compare = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

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

    const RandomizeTems = () => {
        let returnArray = [];
        for (let i = 0; i < 2; i++) {
            returnArray[i] = data[Math.floor(Math.random() * (data.length))];
        }
        return returnArray;
    }

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {

        let tems = RandomizeTems();
        console.log(tems);

        return (
            <Container className='compare-container'>
                <Row className='column-gap-3'>
                    <Col className='d-grid row-gap-3 tem-display p-5'>
                        <Row className='text-center'>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>{tems[0].name}</h3>
                            </Col>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>[ {tems[0].number} ]</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='align-content-center'>
                                <img src={tems[0].wikiRenderStaticUrl} className='col-6 display-img'></img>
                            </Col>
                            <Col className='align-content-center'>
                                <img src={tems[0].wikiRenderStaticLumaUrl} className='col-6 display-img flip-image'></img>
                            </Col>
                        </Row>
                        
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Gender Ratio</h3>
                        </Row>
                        <Row className='justify-content-center'>
                            <PieChart
                                _statOne={tems[0].genderRatio.male}
                                _statTwo={tems[0].genderRatio.female}
                            />
                        </Row>

                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Training Values</h3>
                        </Row>
                        <Row className='justify-content-center'>
                            <PolarChart
                                _statOne={tems[0].tvYields.atk + 1}
                                _statTwo={tems[0].tvYields.def + 1}
                                _statThree={tems[0].tvYields.hp + 1}
                                _statFour={tems[0].tvYields.spatk + 1}
                                _statFive={tems[0].tvYields.spd + 1}
                                _statSix={tems[0].tvYields.spdef + 1}
                                _statSeven={tems[0].tvYields.sta + 1}
                            />
                        </Row>
                    </Col>

                    <Col className='tem-display p-5'>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Hit Points</h3>
                            <BarChart
                                _statOne={tems[0].stats.hp}
                                _statTwo={tems[1].stats.hp}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Speed</h3>
                            <BarChart
                                _statOne={tems[0].stats.spd}
                                _statTwo={tems[1].stats.spd}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Stamina</h3>
                            <BarChart
                                _statOne={tems[0].stats.sta}
                                _statTwo={tems[1].stats.sta}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Attack</h3>
                            <BarChart
                                _statOne={tems[0].stats.atk}
                                _statTwo={tems[1].stats.atk}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Special Attack</h3>
                            <BarChart
                                _statOne={tems[0].stats.spatk}
                                _statTwo={tems[1].stats.spatk}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Defense</h3>
                            <BarChart
                                _statOne={tems[0].stats.def}
                                _statTwo={tems[1].stats.def}
                            />
                        </Row>
                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Special Defense</h3>
                            <BarChart
                                _statOne={tems[0].stats.spdef}
                                _statTwo={tems[1].stats.spdef}
                            />
                        </Row>
                    </Col>

                    <Col className='d-grid row-gap-3 tem-display p-5'>
                        <Row className='text-center'>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>{tems[1].name}</h3>
                            </Col>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>[ {tems[1].number} ]</h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='align-content-center'>
                                <img src={tems[1].wikiRenderStaticUrl} className='col-6 display-img'></img>
                            </Col>
                            <Col className='align-content-center'>
                                <img src={tems[1].wikiRenderStaticLumaUrl} className='col-6 display-img flip-image'></img>
                            </Col>
                        </Row>

                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Gender Ratio</h3>
                        </Row>
                        <Row className='justify-content-center'>
                            <PieChart
                                _statOne={tems[1].genderRatio.male}
                                _statTwo={tems[1].genderRatio.female}
                            />
                        </Row>

                        <Row>
                            <h3 className='blue-text-color primary-text-font text-center'>Training Values</h3>
                        </Row>
                        <Row className='justify-content-center'>
                            <PolarChart
                                _statOne={tems[1].tvYields.atk + 1}
                                _statTwo={tems[1].tvYields.def + 1}
                                _statThree={tems[1].tvYields.hp + 1}
                                _statFour={tems[1].tvYields.spatk + 1}
                                _statFive={tems[1].tvYields.spd + 1}
                                _statSix={tems[1].tvYields.spdef + 1}
                                _statSeven={tems[1].tvYields.sta + 1}
                            />
                        </Row>
                    </Col>
                </Row>

            </Container>
        );

    };


}

export default Compare;