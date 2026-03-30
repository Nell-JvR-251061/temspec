import '../App.css'; //App's styling document
import Buffer from './Buffer';
import RadarChart from './RadarChart';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tooltip from '@mui/material/Tooltip';


const TemDisplay = (_tem) => {

    let tem = _tem._tem;

    let temHeight = tem.details.height.cm;
    let temWeight = tem.details.weight.kg;
    let temCatcatchRate = tem.catchRate;
    let temTraits = tem.traits;
    let temMoves = tem.techniques;
    let temTypes = tem.types;
    let temName = tem.name;
    let temNumber = tem.number;
    let temImg = tem.wikiRenderStaticUrl;
    let temLumaImg = tem.wikiRenderStaticLumaUrl;
    let temStats = tem.stats;

    return (
        <Container>
            <Row className='blue-text-color column-gap-3'>
                <Col className='d-grid row-gap-3'>
                    <Row>
                        <Col className='image-bg align-content-center'>
                            <img src={temImg} className='col-6 display-img'></img>
                        </Col>
                        <Col className='image-bg align-content-center'>
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
                            <Col key={index}>
                                <h4>{trait}</h4>
                            </Col>
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
                        <RadarChart
                            _statOne={temStats.hp}
                            _statTwo={temStats.spd}
                            _statThree={temStats.atk}
                            _statFour={temStats.spatk}
                            _statFive={temStats.spdef}
                            _statSix={temStats.def}
                            _statSeven={temStats.sta}
                        />
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
}


export default TemDisplay;