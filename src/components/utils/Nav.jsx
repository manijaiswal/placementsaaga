import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom: '1px solid'}}>
                <a class="navbar-brand  logo_cont" href="#">
                        <div class="logo-container">
                            <div class="logo-text">
                                <div class="logo-text-line1">Placement</div>
                                <div class="logo-text-line2">Saga</div>
                            </div>
                            <div class="logo-brackets">
                                {"{"}<div class="animated-bars">
                                    <div class="bar1 bar"></div>
                                    <div class="bar2 bar"></div>
                                    <div class="bar3 bar"></div>
                                    <div class="bar4 bar"></div>
                                </div>
                                {"}"}
                            </div>
                        </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link nav_link" href="#">Question Library </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link nav_link" href="#">Mock Tests</a>
                        </li>
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle nav_link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Theory Series
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link nav_link" href="#">Subscibe</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn-login nav-link" href="#">Login</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
        )
    }
}

export default Nav;