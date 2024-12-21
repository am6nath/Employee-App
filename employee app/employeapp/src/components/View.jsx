import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
    const [user, setUser] = useState([]);
    const navigate=useNavigate()


    
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const delValue = (id) => {
        axios.delete(`http://localhost:3004/delete/${id}`)
            .then((res) => {
                alert(res.data.message);
                
                setUser(user.filter((u) => u._id !== id));
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
    };

    const updValue = (ab) => {
        
        navigate("/A",{state:{ab}})
    };

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>AGE</TableCell>
                            <TableCell>DEPT</TableCell>
                            <TableCell>SALARY</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((ab) => (
                            <TableRow key={ab._id}>
                                <TableCell>{ab.Name}</TableCell>
                                <TableCell>{ab.Age}</TableCell>
                                <TableCell>{ab.Dept}</TableCell>
                                <TableCell>{ab.Sal}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => delValue(ab._id)}
                                    >
                                        DELETE
                                    </Button>
                                    <br /><br />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => updValue(ab)}
                                    >
                                        UPDATE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default View;
