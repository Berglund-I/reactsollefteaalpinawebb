import axios from "axios";

class StrapiAdminService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:1337',
        });
    }

    getInformationAboutTrainingSchedule() {
        return this.api.get('/training-schedules');
    }

    getInformationAboutTheSAK() {
        return this.api.get('/information-about-the-saks');
    }

    getInformationAboutTheBoard() {
        return this.api.get('/information-about-the-boards');
    }

    getInformationAboutMembershipPrice() {
        return this.api.get('/membership-prices');
    }

    getInformationAboutTrainingPrice() {
        return this.api.get('/training-prices');
    }
    getSponsorPhoto() {
        return this.api.get('/sponsors');
    }
    getQuestion() {
        return this.api.get('/questions');
    }



    // add more methods for other collections
}

export default new StrapiAdminService();