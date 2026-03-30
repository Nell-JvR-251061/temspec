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
        <div>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Hit Points</h3>
                <BarChart
                    _statOne={temOne.stats.hp}
                    _statTwo={temTwo.stats.hp}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Speed</h3>
                <BarChart
                    _statOne={temOne.stats.spd}
                    _statTwo={temTwo.stats.spd}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Stamina</h3>
                <BarChart
                    _statOne={temOne.stats.sta}
                    _statTwo={temTwo.stats.sta}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Attack</h3>
                <BarChart
                    _statOne={temOne.stats.atk}
                    _statTwo={temTwo.stats.atk}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Special Attack</h3>
                <BarChart
                    _statOne={temOne.stats.spatk}
                    _statTwo={temTwo.stats.spatk}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Defense</h3>
                <BarChart
                    _statOne={temOne.stats.def}
                    _statTwo={temTwo.stats.def}
                />
            </Row>
            <Row>
                <h3 className='blue-text-color primary-text-font text-center'>Special Defense</h3>
                <BarChart
                    _statOne={temOne.stats.spdef}
                    _statTwo={temTwo.stats.spdef}
                />
            </Row>
        </div>
    );
}

export default MiddleCompare;