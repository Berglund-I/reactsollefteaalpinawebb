import axios from "axios";

const COMPETITIONCALENDAR_REST_API_URL = 'http://localhost:8080/api/competitionCalendar';

class CompetitionCalendarService {

    getCompetitionCalendar() {
        return axios.get(COMPETITIONCALENDAR_REST_API_URL)
    }
}

export default new CompetitionCalendarService();