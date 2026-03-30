import '../App.css'; //App's styling document
import Buffer from '../components/Buffer';
import LineChart from '../components/LineChart';
import TemImageDisplay from '../components/TemImageDisplay';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useState, useEffect } from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Timeline = () => {
    const [data, setData] = useState([]);
    const [tem, setTem] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [visibility, setVisibility] = useState([false, true, true, true, true, true, true]);


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

    const UpdateVisibility = (_index) => {
        const tempArray = [...visibility];

        if (tempArray[_index]) {
            tempArray.splice(_index, 1, false);
        }
        else {
            tempArray.splice(_index, 1, true);
        }

        setVisibility(tempArray);
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
                <Row className='row-gap-3 column-gap-3'>
                    <Col className='d-grid row-gap-3 tem-display p-5'>
                        <Row>
                            <Col>
                                <Autocomplete
                                    onChange={(event, value) => UpdateTem(value, array)}
                                    disablePortal
                                    options={array}
                                    sx={{
                                        width: '100%',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // Removes the border on hover
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent', // Removes the border when focused
                                        },
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Search.." />}
                                />
                            </Col>
                            <Col className='col-4'>
                                <button className='random-button secondary-text-font display-snippet align-content-center' onClick={() => UpdateTem(null)}>Random</button>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                                <h2 className='blue-text-color primary-text-font align-content-center'>[{tem.number}]</h2>
                            </Col>
                            <Col>
                                <h2 className='blue-text-color primary-text-font align-content-center'>{tem.name}</h2>
                            </Col>
                        </Row>

                        <TemImageDisplay
                            _tem={tem}
                        />

                        <Row className='text-center row-gap-3 column-gap-3'>
                            <button className="col stat-button display-snippet bg-yellow align-content-center" onClick={() => UpdateVisibility(1)}>Speed</button>
                            <button className="col stat-button display-snippet bg-orange align-content-center" onClick={() => UpdateVisibility(2)}>Stamina</button>
                        </Row>
                        <Row className='text-center row-gap-3 column-gap-3'>
                            <button className="col stat-button display-snippet bg-red align-content-center" onClick={() => UpdateVisibility(3)}>Attack</button>
                            <button className="col stat-button display-snippet bg-pink align-content-center" onClick={() => UpdateVisibility(4)}>SP Attack</button>
                        </Row>
                        <Row className='text-center row-gap-3 column-gap-3'>
                            <button className="col stat-button display-snippet bg-blue align-content-center" onClick={() => UpdateVisibility(5)}>Defense</button>
                            <button className="col stat-button display-snippet bg-light-blue align-content-center" onClick={() => UpdateVisibility(6)}>SP Defense</button>
                        </Row>
                        <Row className='text-center row-gap-3 column-gap-3'>
                            <button className="stat-button display-snippet bg-green align-content-center" onClick={() => UpdateVisibility(0)}>Hit Points</button>
                        </Row>
                    </Col>

                    <Col className='col-lg-8 col-12 d-grid row-gap-3 tem-display p-5'>
                        <LineChart
                            _visibility={visibility}
                            _tem={tem}
                        />
                    </Col>
                </Row >
            </Container >
        );
    }

};

export default Timeline;