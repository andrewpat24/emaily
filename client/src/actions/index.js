import axios from 'axios';
import { FETCH_USER } from './types';

export function fetchUser () {
    return (dispatch) => {
        axios.get('/auth/current_user').then( res => {
            dispatch({
                type: FETCH_USER,
                payload: res
            });
        } ); 
    }
}