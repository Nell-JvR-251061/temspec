import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Buffer from './Buffer';
import { elements } from 'chart.js';


const TemSearchBar = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

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

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {

        const array = data.map(e => e.name);

        //console.log(data);
        //console.log(array);

        return (
            <div>
                <Autocomplete
                    disablePortal
                    options={array}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search for a Tem..." />}
                />
            </div>
        )
    }
}

export default TemSearchBar;
