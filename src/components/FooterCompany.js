import React from 'react';

class FooterCompany extends React.Component {
    render() {
        return (
            <footer>
                <div className="ui inverted menu">
                    <div className="item">
                        <a 
                            style={{
                                fontSize: 10,
                                fontFamily: 'Alice'
                            }}
                            href="https://testhomepageforme.netlify.app/"
                        >
                            Utviklet av R-MARKETING AS
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterCompany;