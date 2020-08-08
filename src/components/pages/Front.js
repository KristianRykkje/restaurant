import React from 'react';
import SamplePicture from '../../images/sample-picture.jpg';
import SampleLogo from '../../images/sample-logo.jpg';
import Logo from '../../images/logo.png';

class Front extends React.Component{
    render() {
            return(
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                    <img
                        src={Logo}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                    <div className="ten wide column">
                    <p>Some Text</p>
                    </div>
                    <div className="three wide column">
                    <img
                        src={SamplePicture}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="three wide column">
                    <img
                        src={SampleLogo}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                    <div className="ten wide column">
                    <p>Some more text</p>
                    </div>
                    <div className="three wide column">
                    <img
                        src={SampleLogo}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="three wide column">
                    <img
                        src={SamplePicture}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                    <div className="ten wide column">
                    <p>Some Text</p>
                    </div>
                    <div className="three wide column">
                    <img
                        src={SamplePicture}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                </div>
                       <div className="row">
                    <div className="three wide column">
                    <img
                        src={SamplePicture}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                    <div className="ten wide column">
                    <p>Some Text</p>
                    </div>
                    <div className="three wide column">
                    <img
                        src={SamplePicture}
                        className="ui image"
                        alt="alt"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;