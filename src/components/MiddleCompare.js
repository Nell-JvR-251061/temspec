import '../App.css'; //App's styling document
import BarChart from './BarChart';


//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const MiddleCompare = ({_temOne,  _temTwo}) => {
    let temOne = _temOne;
    let temTwo = _temTwo;

    return (
        <div className='p-4'>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Hit Points</h3>
                <BarChart
                    _statOne={temOne.stats.hp}
                    _statTwo={temTwo.stats.hp}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Speed</h3>
                <BarChart
                    _statOne={temOne.stats.spd}
                    _statTwo={temTwo.stats.spd}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Stamina</h3>
                <BarChart
                    _statOne={temOne.stats.sta}
                    _statTwo={temTwo.stats.sta}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Attack</h3>
                <BarChart
                    _statOne={temOne.stats.atk}
                    _statTwo={temTwo.stats.atk}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Special Attack</h3>
                <BarChart
                    _statOne={temOne.stats.spatk}
                    _statTwo={temTwo.stats.spatk}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Defense</h3>
                <BarChart
                    _statOne={temOne.stats.def}
                    _statTwo={temTwo.stats.def}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center mb-3'>Special Defense</h3>
                <BarChart
                    _statOne={temOne.stats.spdef}
                    _statTwo={temTwo.stats.spdef}
                />
            </Row>
        </div>
    );
}

export default MiddleCompare;