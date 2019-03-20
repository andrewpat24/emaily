import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {

        let isLoggedIn = !!this.props.auth
    
        switch (isLoggedIn) {
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
                console.log("AuthState:", isLoggedIn);
                return (
                    <Fragment>

                        <li style={{
                            margin: '0 5px'
                        }}> 

                        Credits: {this.props.auth.credits}

                        </li> 
                        <li > <a><Payments /></a> </li>
                        <li > <a href="/auth/logout">Logout</a> </li>
                    </Fragment>
                )
        }

    }

    render () {
 
        let AuthState = this.props.auth;
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