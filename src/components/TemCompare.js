import '../App.css'; //App's styling document
import PieChart from '../components/PieChart';
import PolarChart from '../components/PolarChart';


//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const TemCompare = ({_tem}) => {

    return (
        <Col className='d-grid row-gap-3 tem-display p-5'>
            <Row className='text-center'>
                <Col className='col-12 col-md-6'>
                    <h3 className='blue-text-color primary-text-font align-content-center'>{_tem.name}</h3>
                </Col>
                <Col className='col-12 col-md-6'>
                    <h3 className='blue-text-color primary-text-font align-content-center'>[ {_tem.number} ]</h3>
                </Col>
            </Row>

            <Row>
                <Col className='align-content-center'>
                    <img src={_tem.wikiRenderStaticUrl} className='col-6 display-img'></img>
                </Col>
                <Col className='align-content-center'>
                    <img src={_tem.wikiRenderStaticLumaUrl} className='col-6 display-img flip-image'></img>
                </Col>
            </Row>

            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Gender Ratio</h3>
            </Row>
            <Row className='justify-content-center'>
                <PieChart
                    _statOne = {_tem.genderRatio.male}
                    _statTwo = {_tem.genderRatio.female}
                />
            </Row>

            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Training Values</h3>
            </Row>
            <Row className='justify-content-center'>
                <PolarChart
                    _statOne={_tem.tvYields.atk + 5}
                    _statTwo={_tem.tvYields.def + 5}
                    _statThree={_tem.tvYields.hp + 5}
                    _statFour={_tem.tvYields.spatk + 5}
                    _statFive={_tem.tvYields.spd + 5}
                    _statSix={_tem.tvYields.spdef + 5}
                    _statSeven={_tem.tvYields.sta + 5}
                />
            </Row>
        </Col>
    );
}

export default TemCompare;