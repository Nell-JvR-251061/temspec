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
            // <Container className='tem-display'>
            //     <Row>
            //         <Col className='col-6'>
            //             <div className=' d-flex flex-row justify-content-between img-bg'>
            //                 <img src={temImg} className='col-6'></img>
            //                 <img src={temLumaImg} className='col-6 flip-image'></img>
            //             </div>

            //             <div className='d-flex flex-row justify-content-between secondary-text-font display-snippet'>
            //                 <h4 className='blue-text-color'>Height</h4>
            //                 <h4 className='blue-text-color'>{temHeight} cm</h4>
            //             </div>

            //             <div className='d-flex flex-row justify-content-between secondary-text-font display-snippet'>
            //                 <h4 className='blue-text-color'>Weight</h4>
            //                 <h4 className='blue-text-color'>{temWeight} kg</h4>
            //             </div>

            //             <div className='d-flex flex-row justify-content-between secondary-text-font display-snippet' >
            //                 <h4 className='blue-text-color'>Catch Rate</h4>
            //                 <h4 className='blue-text-color'>{temCatcatchRate}</h4>
            //             </div>

            //             <div className='d-flex flex-column secondary-text-font display-snippet'>
            //                 <h4 className='blue-text-color text-center'>Traits</h4>
            //                 <ul className='d-flex flex-row flex-wrap justify-content-between blue-text-color'>
            //                     {temTraits.map((trait, index) => (
            //                         <Tooltip title={trait}>
            //                             <li key={index}>
            //                                 {trait}
            //                             </li>
            //                         </Tooltip>
            //                     ))}
            //                 </ul>
            //             </div>
            //         </Col>

            //         <Col className='col-6'>
            //             <div className='d-flex flex-row flex-wrap justify-content-around primary-text-font' >
            //                 <h3 className='blue-text-color text-center'>{temName}</h3>
            //                 <h3 className='blue-text-color text-center'>[ {temNumber} ]</h3>
            //             </div>

            //             <ul className='d-flex flex-row justify-content-around blue-text-color secondary-text-font'>
            //                 {temTypes.map((type, index) => (
            //                     <li className='type display-snippet' key={index}>
            //                         {type}
            //                     </li>
            //                 ))}
            //             </ul>

            //             <div className='d-flex flex-row justify-content-center graph-container' >
            //                 <Radar data={graphData} />
            //             </div>

            //             <Container>
            //                 <Row>
            //                     {temMoves.slice(0, 2).map((type, index) => (
            //                         <Col className='display-snippet type align-self-center' key={index}>
            //                             {type.name}
            //                         </Col>
            //                     ))}
            //                 </Row>
            //                 <Row>
            //                     {temMoves.slice(2, 4).map((type, index) => (
            //                         <Col className='display-snippet type align-self-center' key={index}>
            //                             {type.name}
            //                         </Col>
            //                     ))}
            //                 </Row>
            //                 <Row>
            //                     {temMoves.slice(4, 6).map((type, index) => (
            //                         <Col className='display-snippet type align-self-center' key={index}>
            //                             {type.name}
            //                         </Col>
            //                     ))}
            //                 </Row>
            //             </Container>
            //         </Col>
            //     </Row>
            // </Container >

            <Container>
                <Row className='blue-text-color'>
                    <Col className='d-flex flex-column justify-content-between'>
                        <Row>
                            <Col>
                                <img src={temImg} className='col-6 display-img'></img>
                            </Col>
                            <Col>
                                <img src={temLumaImg} className='col-6 display-img flip-image'></img>
                            </Col>
                        </Row>
                        <Row className='display-snippet'>
                            <Col>
                                <h4>Height</h4>
                            </Col>
                            <Col className='text-end'>
                                <h4>{temHeight} cm</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet'>
                            <Col>
                                <h4>Weight</h4>
                            </Col>
                            <Col className='text-end'>
                                <h4>{temWeight} kg</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet'>
                            <Col>
                                <h4>Catch Rate</h4>

                            </Col>
                            <Col className='text-end'>
                                <h4>{temCatcatchRate}</h4>
                            </Col>
                        </Row>
                        <Row className='display-snippet text-center'>
                            <h3 className='text-center'>Traits</h3>
                            {temTraits.map((trait, index) => (
                                <Tooltip title={trait}>
                                    <Col key={index}>
                                        <h4>{trait}</h4>
                                    </Col>
                                </Tooltip>
                            ))}
                        </Row>
                    </Col>

                    <Col>
                        <Row className='text-center'>
                            <Col>
                                <h3 className='blue-text-color'>{temName}</h3>
                            </Col>
                            <Col>
                                <h3 className='blue-text-color'>[ {temNumber} ]</h3>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            {temTypes.map((type, index) => (
                                <Col className='display-snippet' key={index}> <h4>{type}</h4></Col>
                            ))}
                        </Row>
                        <Row className='graph-container'>
                            <Radar data={graphData} />
                        </Row>
                        <Row className='text-center'>
                            {temMoves.slice(0, 2).map((type, index) => (
                                <Col key={index} className='display-snippet'>
                                    <h4>{type.name}</h4>
                                </Col>
                            ))}
                        </Row>
                        <Row className='text-center'>
                            {temMoves.slice(2, 4).map((type, index) => (
                                <Col key={index} className='display-snippet'>
                                    <h4>{type.name}</h4>
                                </Col>
                            ))}
                        </Row>
                        <Row className='text-center'>
                            {temMoves.slice(4, 6).map((type, index) => (
                                <Col key={index} className='display-snippet'>
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