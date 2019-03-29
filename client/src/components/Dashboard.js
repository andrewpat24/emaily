import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div className="componentContainer">
            <div className="componentContent" 
            style={{
                textAlign: 'center'
            }}>
                <h3>Dashboard</h3>
            </div>
            <SurveyList /> 
            <div className="componentButton">
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                        <i className="material-icons dp48">add</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard; 