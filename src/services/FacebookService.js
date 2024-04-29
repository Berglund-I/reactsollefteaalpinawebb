import axios from "axios";

const FACEBOOK_REST_API_URL = 'http://localhost:8080/api/facebook-feed';

class FacebookService {

    getCompetitionCalendar() {
        return axios.get(FACEBOOK_REST_API_URL)
    }
}

export default new FacebookService();