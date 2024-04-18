import React from 'react';
import CompetitionCalendarService from "../services/CompetitionCalendarService";

class CompetitionCalendarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            competitionCalendar:[]
        }
    }

    componentDidMount() {
        CompetitionCalendarService.getCompetitionCalendar().then((res)=>{
            this.setState({competitionCalendar:res.data});
        })
    }

    render (){
        return (
            <div>
                <table className="competitionCalendar-table">
                    <tbody>
                    {
                        this.state.competitionCalendar.map(
                            competitionCalendar =>
                                <tr key={competitionCalendar.id}>
                                    <td>{competitionCalendar.event}</td>
                                    <td>{competitionCalendar.date}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CompetitionCalendarComponent;