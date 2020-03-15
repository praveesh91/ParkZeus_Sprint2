import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './SlotCount.scss';

export default class SlotCount extends Component {
    render() {
        return (
            <div className="slotcount">
                <div className="slotcount__wrapper">
                <TableContainer component={Paper} className="slotcount__wrapper_table">
                    <p className="slotcount__wrapper_table-heading">Slot Count</p>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow style={{background:"#f2f2f0", fontWeight:"700"}}>
                            <TableCell align="left">Type of Vehicle</TableCell>
                            <TableCell align="left">Live Status</TableCell>
                            <TableCell align="left">Total Slots</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">2 Wheeler</TableCell>
                                <TableCell align="left">322</TableCell>
                                <TableCell align="left">2000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">4 Wheeler</TableCell>
                                <TableCell align="left">322</TableCell>
                                <TableCell align="left">2000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Fleet</TableCell>
                                <TableCell align="left">322</TableCell>
                                <TableCell align="left">2000</TableCell>
                            </TableRow>
                       
                        </TableBody>
                    </Table>
                </TableContainer>


                <TableContainer component={Paper} className="slotcount__wrapper_table">
                <p className="slotcount__wrapper_table-heading">Tariff Details</p>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow style={{background:"#f2f2f0", fontWeight:"700"}}>
                            <TableCell align="left">Type of Vehicle</TableCell>
                            <TableCell align="left">Base Price</TableCell>
                            <TableCell align="left">Standard Price</TableCell>
                            <TableCell align="left">Long Term</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">2 Wheeler</TableCell>
                                <TableCell align="left">₹ 30.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">4 Wheeler</TableCell>
                                <TableCell align="left">₹ 30.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Fleet</TableCell>
                                <TableCell align="left">₹ 30.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                                <TableCell align="left">₹ 10.00</TableCell>
                            </TableRow>
                       
                        </TableBody>
                    </Table>
                </TableContainer>

                </div>
                
            </div>
        )
    }
}
