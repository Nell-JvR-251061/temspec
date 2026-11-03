import '../App.css'; //App's styling document
import PieChart from '../components/PieChart';
import PolarChart from '../components/PolarChart';


//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const TemCompare = ({ _tem }) => {

    return (
        <div className='d-grid row-gap-5'>
            <Row className='text-center'>
                <Col className='col-12 col-md-6'>
                    <h3 className='blue-text-color primary-text-font align-content-center'>{_tem.name}</h3>
                </Col>
                <Col className='col-12 col-md-6'>
                    <h3 className='blue-text-color primary-text-font align-content-center'>[ {_tem.number} ]</h3>
                </Col>
            </Row>

            <Row>
                <Col className='image-bg-compare align-content-center text-center'>
                    <img src={_tem.wikiRenderStaticUrl} className='display-img-compare' alt="Static view" />
                </Col>
                <Col className='image-bg-compare align-content-center text-center'>
                    <img src={_tem.wikiRenderStaticLumaUrl} className='display-img-compare flip-image' alt="Luma view" />
                </Col>
            </Row>

            {/* <Row>
                
            </Row> */}
            <Row className='justify-content-center'>
                <h3 className='blue-text-color primary-text-font text-center mb-2'>Gender Ratio</h3>
                <PieChart
                    _statOne={_tem.genderRatio.male}
                    _statTwo={_tem.genderRatio.female}
                />
            </Row>

            {/* <Row>
                
            </Row> */}
            <Row className='justify-content-center'>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Training Values</h3>
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
        </div>
    );
}

export default TemCompare;