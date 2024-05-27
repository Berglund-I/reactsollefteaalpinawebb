import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import StrapiAdminService from "../services/StrapiAdminService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        ...theme.typography.h2,
    },
    [`&.${tableCellClasses.body}`]: {
        ...theme.typography.h3,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {

    },
    '&:last-child td, &:last-child th': {

    },
}));

function createData(
    trainingGroup,
    description,
    trainingPlace,
    trainingDays,
    trainingTimes,
    trainer
) {
    return { trainingGroup, description, trainingPlace, trainingDays, trainingTimes, trainer};
}

function MobileLayout({ rows }) {
    return (
        <Box>
            {rows.map((row) => (
                <Box key={row.trainingGroup} sx={{ marginBottom: 2, padding: 2, border: '1px solid grey', borderRadius: '5px', backgroundColor: '#f5f5f5', boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)' }}>
                    <Box>{row.trainingGroup}</Box>
                    <Box>{row.trainingPlace}</Box>
                    <Box>{row.description}</Box>
                    <Box>{row.trainingDays}</Box>
                    <Box>{row.trainingTimes}</Box>
                    <Box>{row.trainer}</Box>
                </Box>
            ))}
        </Box>
    );
}

function TrainingScheduleComponent() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        StrapiAdminService.getInformationAboutTrainingSchedule()
            .then(response => {
                const data = response.data;
                const newRows = data.map(item => createData(
                    item.trainingGroup,
                    item.description,
                    item.trainingPlace,
                    item.trainingDays,
                    item.trainingTimes,
                    item.trainer
                ));
                setRows(newRows);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <>
            <Hidden smDown>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Träningsgrupp</StyledTableCell>
                                <StyledTableCell align="left" >Beskrivning</StyledTableCell>
                                <StyledTableCell align="left" >Samlingsplats</StyledTableCell>
                                <StyledTableCell align="left">Dagar</StyledTableCell>
                                <StyledTableCell align="left">Tid</StyledTableCell>
                                <StyledTableCell align="left" >Tränare</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.trainingGroup}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.trainingGroup}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.description}</StyledTableCell>
                                    <StyledTableCell align="left">{row.trainingPlace}</StyledTableCell>
                                    <StyledTableCell align="left">{row.trainingDays}</StyledTableCell>
                                    <StyledTableCell align="left">{row.trainingTimes}</StyledTableCell>
                                    <StyledTableCell align="left">{row.trainer}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Hidden>
            <Hidden mdUp>
                <MobileLayout rows={rows} />
            </Hidden>
        </>
    );
}

export default TrainingScheduleComponent;