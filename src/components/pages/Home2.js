import React from 'react';
import { Link } from 'react-router-dom';
import TryPic from '../../images/TryPic.jpg';

class Home2 extends React.Component{
    render() {

        const sectionStyle = {
            backgroundImage:`url(${TryPic})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundPosition: 'center center',
        };

        return (
            <div className="Component-Bg" style={ sectionStyle } >
                <div className="ui internally celled grid">
                    <div className="three wide column">
                        <div className="row">
                            <Link to="/menu">
                                <h2 className="ui olive centered header">
                                    Menu    
                                </h2>
                            </Link>
                            <br />  
                            <Link to="/gallery">
                                <h2 className="ui inverted centered header">
                                    Pictures   
                                </h2>
                            </Link>
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div>
                            <h1 className="ui inverted centered header">
                                <br />
                                Try Our delishes food
                            </h1>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                        <div className="row">
                            <br />
                        </div>
                    </div>
                    <div className="three wide column">
                        <Link to="/story">
                            <h2 className="ui blue centered header">
                                Our story
                            </h2>
                        </Link>
                        <br />
                        <Link to="/contact">
                            <h2 className="ui red centered header">
                                Contact
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home2;