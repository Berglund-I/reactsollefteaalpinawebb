import axios from "axios";

const FACEBOOK_PICTURE_REST_API_URL = 'http://localhost:8080/api/facebook-pictures';
const FACEBOOK_SINGLE_PICTURE_API_URL = 'http://localhost:8080/api/facebook-picture';

class FacebookPictureService {

    getFacebookFeed() {
        return axios.get(FACEBOOK_PICTURE_REST_API_URL);
    }

    getFacebookPicture(id) {
        return axios.get(`${FACEBOOK_SINGLE_PICTURE_API_URL}/${id}`);
    }
}

export default new FacebookPictureService();