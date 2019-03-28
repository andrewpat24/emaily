import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/auth/current_user');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    }
}

export const handleToken = (token) => {
    return async (dispatch) => {
        const res = await axios.post('/api/billing/stripe', token);
        dispatch({
            type: FETCH_USER, 
            payload: res.data
        })
    }
}


export const submitSurvey = (values, history) => {
    return async (dispatch) => {
        const res = await axios.post('/api/survey', values);
        history.push('/surveys');
        dispatch({
            type: FETCH_USER, 
            payload: res.data
        })
    }
}