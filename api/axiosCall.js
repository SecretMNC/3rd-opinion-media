import axios from 'axios';
import imageApi from '../controller/picture_controller.js';

export function getReviewPics() {
    return axios.get( imageApi ).then( response => response.data);
}