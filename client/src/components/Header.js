import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {

        let AuthState = this.props.auth
        if(this.props.auth !== null ) {
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
        return (
            <nav>
                <div className="nav-wrapper" >
                   
                    <a href="/" className="left brand-logo">
                        Emaily
                    </a>
                    
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