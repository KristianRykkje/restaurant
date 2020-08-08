import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="ui two column centered grid">
                <div className="four column centered row">
                    <h3 className="ui center">Ta kontakt med oss</h3>
                </div>
                <div className="four column center row">
                    Vi holder til på blah ved side av nnasla
                </div>
                <div className="six column center row">
                    <div className="column">
                        <div className="ui list">
                            <div className="item">
                                <i className="phone icon"></i>
                                <div className="content">
                                    +47 88 00 99 00
                                </div>
                            </div>
                            <div className="item">
                                <i className="envelope icon"></i>
                                <div className="content">
                                    getme@my.email
                                </div>
                            </div>
                            <div className="item">
                                <i className="map marker alternate icon"></i>
                                <div className="content">
                                    Min minnes gate 1, Bergen
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div>Åpningstider:</div>
                        <div>Mandag-fredag: 10:00-22:00</div>
                        <div>Lørdag-søndag: 10:00-23:00</div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;