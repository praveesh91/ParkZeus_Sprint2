import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './OperationTimings.scss';

export default class OperationTimings extends Component {
    render() {
        return (
            <div className="OperationanTimings">
                <div className="OperationanTimings__wrapper">
                <p className="OperationanTimings__wrapper_table-heading">Operation Timings</p>

                <TableContainer component={Paper} className="OperationanTimings__wrapper_table">
                    <div className="OperationanTimings__wrapper_table_left">
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow style={{background:"#f2f2f0", fontWeight:"700"}}>
                                <TableCell align="left">Days of the Week</TableCell>
                                <TableCell align="right">Open Time</TableCell>
                                <TableCell align="right">Close Time</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">Monday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Tuesday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Wednesday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Thursday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Friday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Saturday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Sunday</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                        </TableBody>
                        </Table>
                </div>
                    <div className="OperationanTimings__wrapper_table_right">
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow style={{background:"#f2f2f0", fontWeight:"700"}}>
                                    <TableCell align="left">24-Jan-2020 to 26-Jan-2020</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableHead>
                                <TableRow style={{background:"#f2f2f0", fontWeight:"700"}}>
                                    <TableCell align="left">24-Jan-2020 to 26-Jan-2020</TableCell>
                                    <TableCell align="right">06 : 00</TableCell>
                                    <TableCell align="right">22 : 00</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </div>
                    
                    
                </TableContainer>

                </div>
            </div>
        )
    }
}
