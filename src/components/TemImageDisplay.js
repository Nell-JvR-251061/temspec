import '../App.css'; //App's styling document
import Buffer from './Buffer';

import { useState, useEffect } from 'react';

//Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const TemImageDisplay = (_tem) => {

    _tem = _tem._tem;

    return (
        <Row>
            <Col className='image-bg align-content-center'>
                <img src={_tem.wikiRenderStaticUrl} className='col-6 display-img'></img>
            </Col>
            <Col className='image-bg align-content-center'>
                <img src={_tem.wikiRenderStaticLumaUrl} className='col-6 display-img flip-image'></img>
            </Col>
        </Row>
    );
};

export default TemImageDisplay;