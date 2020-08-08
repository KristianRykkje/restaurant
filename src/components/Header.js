import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../images/logo2.png';

const Header = () => {
    return (
        <div className="ui inverted borderless menu">
            <Link to="/" className="item">
                <img className="ui small image" src={Logo2} alt="alt" />
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    <h3>
                        Home
                    </h3>
                </Link>
                <Link to="/home2" className="item">
                    <h3>
                        Home2
                    </h3>
                </Link>
                <Link to="/home3" className="item">
                    <h3>
                        Home3
                    </h3>
                </Link>
                <Link to="/menu" className="item">
                    <h3>
                        Menu
                    </h3>
                </Link>
                <Link to="/menu2" className="item">
                    <h3>
                        Menu2
                    </h3>
                </Link>
                <Link to="/gallery" className="item">
                    <h3>
                        Gallery
                    </h3>
                </Link>
                <Link to="/story" className="item">
                    <h3>
                        Story
                    </h3>
                </Link>
                <Link to="/contact" className="item">
                    <h3>
                        Contact
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default Header;