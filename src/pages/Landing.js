import '../App.css'; //App's styling document
import { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';
import Buffer from '../components/Buffer';
import TemDisplay from '../components/TemDisplay';
import TemEvolutionCard from '../components/TemEvolutionCard';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [tem, setTem] = useState({});

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
            <div className='d-flex flex-row flex-wrap'>
                <div className='landing-left col-lg-5 col-12'>
                    <InfoCard />
                    <TemEvolutionCard
                        _dataBase={data}
                        _tem={tem}
                    />
                </div>
                <Container className='landing-right col-lg-6 col-12 d-grid row-gap-4'>
                    <Row>
                        <Col className='d-grid row-gap-3'>
                            <Autocomplete
                                onChange={(event, value) => UpdateTem(value, array)}
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
                        <Col className='col-4 d-grid row-gap-3'>
                            <button id='landing-button' className='random-button secondary-text-font display-snippet align-content-center' onClick={() => UpdateTem(null)}>Random</button>
                        </Col>
                    </Row>
                    <Row>
                        <TemDisplay
                            _tem={tem}
                        />
                    </Row>
                </Container>


            </div >
        );
    }
};

export default Landing;