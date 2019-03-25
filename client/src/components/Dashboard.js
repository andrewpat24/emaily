import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="componentContainer">
            <div className="componentContent" 
            style={{
                textAlign: 'center'
            }}>
                <h1>Dashboard</h1>
            </div>

            <div className="componentButton">
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" class="btn-floating btn-large waves-effect waves-light red">
                        <i class="material-icons dp48">add</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard; 