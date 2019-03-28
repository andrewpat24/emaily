import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
class SurveyForm extends Component {

    renderFields() {
        return(
            <div>

                <Field 
                    type="text"
                    name="title"
                    label="Survey Title"
                    component={SurveyField}
                />

                <Field 
                    type="text"
                    name="subject"
                    label="Subject Line"
                    component={SurveyField}
                />

                <Field 
                    type="text"
                    name="body"
                    label="Email Body"
                    component={SurveyField}
                />

                <Field 
                    type="text"
                    name="recipients"
                    label="Recipient List"
                    component={SurveyField}
                />

            </div>
        )
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={
                        this.props.handleSubmit(this.props.onSurveySubmit)
                    }
                >
                    {this.renderFields()}
                    <Link className="red btn-flat white-text" to="/surveys">
                        Cancel
                    </Link>
                    <button 
                        className="teal btn-flat right white-text"
                        type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate (values) {
    const errors = {};

    // Title validators
    if(!values.title) {
        errors.title = 'You must provide a title.';
    } else if (values.title.length > 80) {
        errors.title = 'Title may not be more than 80 characters long.'
    } 

    // Subject validators
    if(!values.subject) {
        errors.subject = 'You must provide a subject.';
    } else if (values.title.length > 80) {
        errors.subject = 'Subject may not be more than 80 characters long.';
    } 

    // Body validators
    if(!values.body) {
        errors.body = 'You must provide a body.';
    }

    // Email validators
    errors.recipients = validateEmails(values.recipients);

    if(!values.recipients) {
        errors.recipients = 'You must provide comma-seperated emails.';
    }
    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm', 
    destroyOnUnmount: false
})(SurveyForm); 