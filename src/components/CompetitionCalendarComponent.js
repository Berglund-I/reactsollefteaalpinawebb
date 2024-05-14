import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CompetitionCalendarService from "../services/CompetitionCalendarService";
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {styled} from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        ...theme.typography.body1,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {

    },
    '&:last-child td, &:last-child th': {

    },
}));

class CompetitionCalendarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            competitionCalendar: [],
            loading: true // Lägg till en loading-flagga för att indikera att data hämtas
        }
    }

    componentDidMount() {
        CompetitionCalendarService.getCompetitionCalendar().then((res)=>{
            this.setState({competitionCalendar: res.data, loading: false});
        })
    }

    handleButtonClick = (eventID) => {
        const url = `https://ta.skidor.com/EventDetails.aspx?EventID=${eventID}&orgid=8658`;
        window.location.href = url;
    }

    render (){
        const { competitionCalendar, loading } = this.state;

        return (
            <div>
                {loading ? (
                    <div>
                        <Typography variant="body1">Hämtar tävlingskalender <FontAwesomeIcon icon={faSpinner} spin style={{color: "#003c99"}} /> </Typography>

                    </div>
                ) : competitionCalendar.length === 0 ? (
                    <Typography variant="body1">Sollefteå alpina är inte med och arrangerar någon tävling för tillfället.</Typography>
                ) : (
                    <Table className="competitionCalendar-table">
                        <TableBody>
                            {competitionCalendar.map(
                                competitionCalendar =>
                                    <StyledTableRow key={competitionCalendar.id}>
                                        <StyledTableCell>{competitionCalendar.event}</StyledTableCell>
                                        <StyledTableCell>{competitionCalendar.date}</StyledTableCell>
                                        <StyledTableCell>
                                            <Button variant="contained" color="primary" onClick={() => this.handleButtonClick(competitionCalendar.eventID)}>Gå till anmälan<i className="bi bi-box-arrow-up-right"></i></Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                            )}
                        </TableBody>
                    </Table>
                )}
            </div>
        )
    }
}
export default CompetitionCalendarComponent;