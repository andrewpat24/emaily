import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {

        let AuthState = this.props.auth
        if( this.props.auth !== null ) {
            AuthState = this.props.auth.loggedIn
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
                    <div>
                        <li>
                            <a href="/auth/google">Login with Google</a>
                        </li>
                    </div>
                )
                break; 
            default: 
                return (
                    <div>
                        <li>
                            <a href="/auth/logout">Logout</a>
                        </li>
                        <li>
                            <a href="/auth/logout">Logout</a>
                        </li>
                    </div>
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