import '../App.css'; //App's styling document
import Buffer from './Buffer';

import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tooltip from '@mui/material/Tooltip';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Legend
);




const TemDisplay = (_tem) => {

    const tem = _tem.children;


    const [traits, setTraits] = useState([]);
    const [techniques, setTechniques] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [temHeight, setTemHeight] = useState();
    const [temWeight, setTemWeight] = useState();
    const [temCatcatchRate, setTemCatcatchRate] = useState();
    const [temTraits, setTemTraits] = useState();
    const [temLocations, setTemLocations] = useState();
    const [temMoves, setTemMoves] = useState();
    const [temTypes, setTemTypes] = useState();
    const [temName, setTemName] = useState();
    const [temNumber, setTemNumber] = useState();
    const [temImg, setTemImg] = useState();
    const [temLumaImg, setTemLumaImg] = useState();
    const [temStats, setTemStats] = useState();

    useEffect(() => {
        setTemName(tem.name);
        setTemHeight(tem.details.height.cm);
        setTemWeight(tem.details.weight.kg);
        setTemCatcatchRate(tem.catchRate);
        setTemTraits(tem.traits);
        setTemLocations(tem.temLocations); //
        setTemMoves(tem.techniques); //
        setTemTypes(tem.types);
        setTemNumber(tem.number);
        setTemImg(tem.wikiRenderStaticUrl);
        setTemLumaImg(tem.wikiRenderStaticLumaUrl);
        setTemStats(tem.stats);

        // const getTraits = async () => {
        //     try {
        //         const response = await fetch('https://temtem-api.mael.tech/api/traits');
        //         const result = await response.json();
        //         setTraits(result);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };

        // getTraits();

        // const getTechniques = async () => {
        //     try {
        //         const response = await fetch('https://temtem-api.mael.tech/api/techniques');
        //         const result = await response.json();
        //         setTechniques(result);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };

        // getTechniques();

        setLoading(false);

    }, []);

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {
        const graphData = {
            labels: ['HP ' + temStats.hp, 'SPD ' + temStats.spd, 'ATK ' + temStats.atk, 'SP-ATK ' + temStats.spatk, 'SP-DEF ' + temStats.spdef, 'DEF ' + temStats.def, 'STA ' + temStats.sta],
            datasets: [
                {
                    label: 'Stats',
                    data: [temStats.hp, temStats.spd, temStats.atk, temStats.spatk, temStats.spdef, temStats.def, temStats.sta],
                    backgroundColor: 'rgba(232, 242, 242, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        };


        return (
            <Container className='tem-display p-4'>
                <Row className='blue-text-color column-gap-3'>
                    <Col className='d-grid row-gap-3'>
                        <Row>
                            <Col className='align-content-center'>
                                <img src={temImg} className='col-6 display-img'></img>
                            </Col>
                            <Col className='align-content-center'>
                                <img src={temLumaImg} className='col-6 display-img flip-image'></img>
                            </Col>
                        </Row>
                        <Row className='display-snippet secondary-text-font'>
                            <Col className='align-content-center'>
                                <h4>Height</h4>
                            </Col>
                            <Col className='text-end align-content-center'>
                                <h4>{temHeight} cm</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet secondary-text-font'>
                            <Col className='align-content-center'>
                                <h4>Weight</h4>
                            </Col>
                            <Col className='text-end align-content-center'>
                                <h4>{temWeight} kg</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet secondary-text-font'>
                            <Col className='align-content-center'>
                                <h4>Catch Rate</h4>

                            </Col>
                            <Col className='text-end align-content-center'>
                                <h4>{temCatcatchRate}</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet text-center secondary-text-font'>
                            <h3 className='text-center primary-text-font'>Traits</h3>
                            {temTraits.map((trait, index) => (
                                <Tooltip title={trait}>
                                    <Col key={index}>
                                        <h4>{trait}</h4>
                                    </Col>
                                </Tooltip>
                            ))}
                        </Row>
                    </Col>

                    <Col className='d-grid row-gap-3'>
                        <Row className='text-center'>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>{temName}</h3>
                            </Col>
                            <Col className='col-12 col-md-6'>
                                <h3 className='blue-text-color primary-text-font align-content-center'>[ {temNumber} ]</h3>
                            </Col>
                        </Row>
                        <Row className='text-center column-gap-3'>
                            {temTypes.map((type, index) => (
                                <Col className='display-snippet secondary-text-font align-content-center' key={index}> <h4>{type}</h4></Col>
                            ))}
                        </Row>
                        <Row className='graph-container'>
                            <Radar data={graphData} />
                        </Row>
                        <Row className='text-center column-gap-3 row-gap-3'>
                            {temMoves.slice(0, 2).map((type, index) => (
                                <Col key={index} className='display-snippet secondary-text-font align-content-center'>
                                    <h4>{type.name}</h4>
                                </Col>
                            ))}
                        </Row>
                        <Row className='text-center column-gap-3 row-gap-3'>
                            {temMoves.slice(2, 4).map((type, index) => (
                                <Col key={index} className='display-snippet secondary-text-font align-content-center'>
                                    <h4>{type.name}</h4>
                                </Col>
                            ))}
                        </Row>
                        <Row className='text-center column-gap-3 row-gap-3'>
                            {temMoves.slice(4, 6).map((type, index) => (
                                <Col key={index} className='display-snippet secondary-text-font align-content-center'>
                                    <h4>{type.name}</h4>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };
}


export default TemDisplay;