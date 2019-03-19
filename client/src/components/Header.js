import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {

        let AuthState = this.props.auth
        if( this.props.auth !== null || this.props.auth !== undefined) {
            AuthState = this.props.auth; 
        }
        
        switch (AuthState) {
            case null: 
                return;
                break; 
            case undefined: 
                return;
                break; 
            case false: 
                return (
                    <Fragment>
                        <li> <a href="/auth/google">Login with Google</a> </li>
                    </Fragment>
                )
                break; 
            default: 
                return (
                    <Fragment>
                        <li> Credits: </li> 
                        <li > <a><Payments /></a> </li>
                        <li > <a href="/auth/logout">Logout</a> </li>
                    </Fragment>
                )
        }

    }

    render () {
        console.log("auth:", this.props.auth);

        let AuthState = this.props.auth
        if( this.props.auth !== null ) {
            AuthState = this.props.auth.loggedIn
        }

        return (
            <nav>
                <div className="nav-wrapper" >
                   
                    <Link to={AuthState ? '/surveys' : '/'} className="left brand-logo">
                        Emaily
                    </Link>
                    
                    <ul className="right">
                        
                        { this.renderContent() }
                        
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return { 
        auth: state.auth
    };
} 

export default connect(mapStateToProps)(Header);