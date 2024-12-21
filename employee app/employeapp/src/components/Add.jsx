import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
    const [input, setInput] = useState({ Name: "", Age: "", Dept: "", Sal: "" });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        
        if (location.state && location.state.ab) {
            setInput({
                Name: location.state.ab.Name,
                Age: location.state.ab.Age,
                Dept: location.state.ab.Dept,
                Sal: location.state.ab.Sal,
            });
        }
    }, [location.state]);

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const addHandler = () => {
        if (location.state && location.state.ab) {
            // Update existing record
            axios.put(`http://localhost:3004/update/`+location.state.ab._id, input)
                .then((res) => {
                    alert(res.data.message);
                    navigate("/V");
                })
                .catch((err) => console.error("Error updating record:", err));
        } else {
            // Add new record
            axios.post("http://localhost:3004/add", input)
                .then((res) => {
                    alert(res.data.message);
                    navigate("/V");
                })
                .catch((err) => console.error("Error adding record:", err));
        }
    };

    return (
        <div>
            <center>
                <h1><u>{location.state ? "Edit" : "Add"}</u></h1>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="Name"
                    value={input.Name}
                    onChange={inputHandler}
                /><br /><br />

                <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    name="Age"
                    value={input.Age}
                    onChange={inputHandler}
                /><br /><br />

                <TextField
                    id="outlined-basic"
                    label="Dept"
                    variant="outlined"
                    name="Dept"
                    value={input.Dept}
                    onChange={inputHandler}
                /><br /><br />

                <TextField
                    id="outlined-basic"
                    label="Salary"
                    variant="outlined"
                    name="Sal"
                    value={input.Sal}
                    onChange={inputHandler}
                /><br /><br />

                <Button variant="contained" onClick={addHandler}>
                    {location.state ? "Update" : "Add"}
                </Button>
            </center>
        </div>
    );
};

export default Add;
