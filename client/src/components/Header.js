import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            case false: 
                return (
                    <a href="/auth/google">Login with Google</a>
                )
                break; 
            case undefined: 
                return;
                break; 
            default: 
                return (
                    <a href="/auth/logout">Logout</a>
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
                        <li>
                            { this.renderContent() }
                        </li>
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