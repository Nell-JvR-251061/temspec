import '../App.css'; //App's styling document
import Buffer from '../components/Buffer';
import TemCompare from '../components/TemCompare';
import MiddleCompare from '../components/MiddleCompare';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useState, useEffect } from 'react';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Compare = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [temA, setTemA] = useState({});
    const [temB, setTemB] = useState({});

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

    const UpdateTemA = (_name, _array) => {
        let returnVar;
        if (_name == null) {
            returnVar = data[Math.floor(Math.random() * (data.length))];
        }
        else {
            let found = _array.findIndex(temName => temName == _name);
            returnVar = data[found];
        }

        setTemA(returnVar);
    }

    const UpdateTemB = (_name, _array) => {
        let returnVar;
        if (_name == null) {
            returnVar = data[Math.floor(Math.random() * (data.length))];
        }
        else {
            let found = _array.findIndex(temName => temName == _name);
            returnVar = data[found];
        }

        setTemB(returnVar);
    }

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {

        if (JSON.stringify(temA) === '{}' || JSON.stringify(temB) === '{}') {
            UpdateTemA();
            UpdateTemB();
        }

        let array = data.map(e => e.name);

        //console.log(data);
        //console.log(temA);
        //console.log(temB);

        return (
            <Container className='compare-container px-5'>
                <Row className='column-gap-5 row-gap-3'>
                    <Col className='tem-display p-5 d-grid row-gap-3'>
                        <Row>
                            <Col>
                                <Autocomplete
                                    onChange={(event, value) => UpdateTemA(value, array)}
                                    disablePortal
                                    options={array}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
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
                                <button className='random-button secondary-text-font display-snippet align-content-center' onClick={() => UpdateTemA(null)}>Random</button>
                            </Col>
                        </Row>

                        <TemCompare
                            _tem={temA}
                        />
                    </Col>
                    <Col className='tem-display p-4 row-gap-3'>
                        <MiddleCompare
                            _temOne={temA}
                            _temTwo={temB}
                        />
                    </Col>
                    <Col className='tem-display p-5 d-grid row-gap-3'>
                        <Row>
                            <Col>
                                <Autocomplete
                                    onChange={(event, value) => UpdateTemB(value, array)}
                                    disablePortal
                                    options={array}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
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
                                <button className='random-button secondary-text-font display-snippet align-content-center' onClick={() => UpdateTemB(null)}>Random</button>
                            </Col>
                        </Row>
                        <TemCompare
                            _tem={temB}
                        />
                    </Col>
                </Row>
            </Container>
        );

    };
};

export default Compare;