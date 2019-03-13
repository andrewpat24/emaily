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
                return 'Still deciding'
                break; 
            case false: 
                return 'Logged out'
                break; 
            case undefined: 
                return 'undefined'
                break; 
            default:  
                console.log(this.props.auth.loggedIn);
                return 'Logged in'
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
                            {/* <a href="/auth/google">Login with Google</a> */}
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