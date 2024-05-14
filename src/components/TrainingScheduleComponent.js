import * as React from 'react';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    trainingGroup: string,
    description: string,
    trainingDays: string,
    trainingTimes: string,
) {
    return { trainingGroup, description, trainingDays, trainingTimes};
}

const rows = [
    createData('Nybörjargruppen', 'För åkaren som är ny till skidåkning', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
    createData('U10', 'För åkaren som är 0-10 år gammal', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
    createData('U12', 'För åkaren som är 11-12 år gammal', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
    createData('U14', 'För åkaren som är 13-14 år gammal', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
    createData('U16', 'För åkaren som är 15-16 år gammal', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
    createData('FIS', 'För åkaren som är 17 år gammal och äldre', 'Måndagar, tisdagar och torsdagar', 'kl 18-20:30'),
];

function MobileLayout({ rows }) {
    return (
        <Box>
            {rows.map((row) => (
                <Box key={row.trainingGroup} sx={{ marginBottom: 2, padding: 2, backgroundColor: 'action.hover' }}>
                    <Box>{row.trainingGroup}</Box>
                    <Box>{row.description}</Box>
                    <Box>{row.trainingDays}</Box>
                    <Box>{row.trainingTimes}</Box>
                </Box>
            ))}
        </Box>
    );
}

function TrainingScheduleComponent() {
    return (
        <>
            <Hidden smDown>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Träningsgrupp</StyledTableCell>
                                <StyledTableCell align="right">Beskrivning</StyledTableCell>
                                <StyledTableCell align="right">Dagar</StyledTableCell>
                                <StyledTableCell align="right">Tid</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.trainingGroup}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.trainingGroup}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.description}</StyledTableCell>
                                    <StyledTableCell align="right">{row.trainingDays}</StyledTableCell>
                                    <StyledTableCell align="right">{row.trainingTimes}</StyledTableCell>
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