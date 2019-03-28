import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    return (
        <div>
            <h5>Confirm your submission.</h5>

            <div style={{
                marginBottom: '10px'
            }}>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipient List</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>

            <button
                className="yellow darken-3 btn-flat white-text"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                className="green btn-flat right white-text"
                onClick={() => {
                    submitSurvey(formValues, history)
                }}
            >
                Send Survey <i className="material-icons right">email</i>
            </button>
        </div>
    );
}   

function mapStateToProps (state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview)); 