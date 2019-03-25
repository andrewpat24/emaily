import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
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
                    name="emails"
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
                        this.props.handleSubmit((values) => {
                            console.log(values);
                        })
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

export default reduxForm({
    // validate: validate,
    form: 'surveyForm'
})(SurveyForm); 