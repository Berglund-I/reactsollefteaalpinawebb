import React from 'react';
import CompetitionCalendarService from "../services/CompetitionCalendarService";

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

    render (){
        const { competitionCalendar, loading } = this.state;

        return (
            <div>
                {loading ? (
                    <p>Hämtar tävlingskalender...</p>
                ) : competitionCalendar.length === 0 ? (
                    <p>Sollefteå alpina är inte med och arrangerar någon tävling för tillfället.</p>
                ) : (
                    <table className="competitionCalendar-table">
                        <tbody>
                        {competitionCalendar.map(
                            competitionCalendar =>
                                <tr key={competitionCalendar.id}>
                                    <td>{competitionCalendar.event}</td>
                                    <td>{competitionCalendar.date}</td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}
export default CompetitionCalendarComponent;
